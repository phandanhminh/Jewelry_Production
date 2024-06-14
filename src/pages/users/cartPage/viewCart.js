import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './viewCart.scss';

const ViewCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.product.price.replace('$', '')) * item.quantity, 0);
    };

    const updateCartItemQuantity = (productId, newQuantity) => {
        const sanitizedQuantity = Math.max(1, newQuantity);
        const updatedCartItems = cartItems.map(item => (item.product.id === productId ? { ...item, quantity: sanitizedQuantity } : item));
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.product.id !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify([]));
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { totalPrice: calculateTotalPrice() } });
    };

    return (
        <div className="view-cart">
            <h2>Giỏ Hàng Của Bạn</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.product.id}>
                                <img src={item.product.src} alt={item.product.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.product.name}</h3>
                                    <p>{item.product.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateCartItemQuantity(item.product.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p>Tổng Tiền: ${calculateTotalPrice().toFixed(2)}</p>
                    <button onClick={clearCart}>Xóa Giỏ Hàng</button>
                    <button onClick={handleCheckout}>Thanh Toán</button>
                </div>
            )}
        </div>
    );
};

export default ViewCart;
