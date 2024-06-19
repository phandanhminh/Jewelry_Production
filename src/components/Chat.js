// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, doc, setDoc, getDocs } from 'firebase/firestore';
import { db, serverTimestamp } from '../firebaseConfig';
import './Chat.scss';

const Chat = ({ userId, otherUserId }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [conversationId, setConversationId] = useState(null);

    useEffect(() => {
        const findOrCreateConversation = async () => {
            if (!userId || !otherUserId) {
                console.error('User IDs must be defined');
                return;
            }

            try {
                console.log("Finding or creating conversation...");
                const conversationRef = collection(db, 'conversations');
                const q = query(conversationRef);
                const snapshot = await getDocs(q);
                let conversation = null;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.userIds.includes(userId) && data.userIds.includes(otherUserId)) {
                        conversation = { id: doc.id, ...data };
                    }
                });

                if (conversation) {
                    console.log("Found existing conversation:", conversation);
                    setConversationId(conversation.id);
                } else {
                    console.log("Creating new conversation...");
                    const newConversation = await addDoc(conversationRef, {
                        userIds: [userId, otherUserId],
                        lastMessage: { text: '', timestamp: serverTimestamp() }
                    });
                    console.log("New conversation created with ID:", newConversation.id);
                    setConversationId(newConversation.id);
                }
            } catch (error) {
                console.error('Error finding or creating conversation: ', error);
            }
        };

        findOrCreateConversation();
    }, [userId, otherUserId]);

    useEffect(() => {
        if (conversationId) {
            const messagesRef = collection(db, `conversations/${conversationId}/messages`);
            const q = query(messagesRef, orderBy('timestamp', 'asc'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const messages = [];
                querySnapshot.forEach((doc) => {
                    messages.push(doc.data());
                });
                console.log("Messages updated:", messages);
                setMessages(messages);
            });

            return () => unsubscribe();
        }
    }, [conversationId]);

    const sendMessage = async () => {
        if (message.trim() && conversationId) {
            try {
                console.log("Sending message...");
                const messagesRef = collection(db, `conversations/${conversationId}/messages`);
                await addDoc(messagesRef, {
                    text: message,
                    senderId: userId,
                    timestamp: serverTimestamp(),
                });

                // Update last message in conversation
                const conversationRef = doc(db, 'conversations', conversationId);
                await setDoc(conversationRef, { lastMessage: { text: message, timestamp: serverTimestamp() } }, { merge: true });

                console.log("Message sent:", message);
                setMessage('');
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        } else {
            console.error("Message or conversationId is missing");
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Chat</h2>
                <button onClick={() => console.log('Close chat')}>×</button>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.senderId === userId ? 'sent' : 'received'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
