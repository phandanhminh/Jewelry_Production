// GoldPriceTracker.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import './GoldPriceTracker.scss'; // Import SCSS

function GoldPriceTracker() {
    const [selectedDate, setSelectedDate] = useState('');
    const [goldPrice, setGoldPrice] = useState(null);
    const [currentGoldPrice, setCurrentGoldPrice] = useState(null);

    useEffect(() => {
        // Gọi API để lấy giá vàng hiện tại khi component được load
        fetchCurrentGoldPrice();
    }, []);

    const fetchCurrentGoldPrice = () => {
        const apiUrl = 'https://www.goldapi.io/api/XAU/USD';
        const headers = {
            'x-access-token': 'goldapi-3pk0blslxkrc4xs-io' // Thay YOUR_GOLD_API_ACCESS_TOKEN bằng token của bạn
        };

        axios.get(apiUrl, { headers })
            .then(response => {
                const price = response.data.price;
                setCurrentGoldPrice(price);
            })
            .catch(error => {
                console.error('Lỗi khi gọi API giá vàng hiện tại:', error);
                alert('Đã xảy ra lỗi khi tải giá vàng hiện tại. Vui lòng thử lại sau.');
            });
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const fetchGoldPrice = () => {
        if (!selectedDate) {
            alert('Vui lòng chọn ngày để xem giá vàng.');
            return;
        }

        const formattedDate = format(new Date(selectedDate), 'yyyy-MM-dd');
        const apiUrl = `https://www.goldapi.io/api/XAU/USD/${formattedDate}`;
        const headers = {
            'x-access-token': 'goldapi-3pk0blslxkrc4xs-io' // Thay YOUR_GOLD_API_ACCESS_TOKEN bằng token của bạn
        };

        axios.get(apiUrl, { headers })
            .then(response => {
                const price = response.data.price;
                setGoldPrice(price);
            })
            .catch(error => {
                console.error('Lỗi khi gọi API giá vàng:', error);
                alert('Đã xảy ra lỗi khi tải giá vàng. Vui lòng thử lại sau.');
            });
    };

    return (
        <div className="gold-price-tracker">
            <div className="current-gold-price">
                <h2>Giá vàng hiện tại</h2>
                <p>{currentGoldPrice !== null ? `${currentGoldPrice} USD` : 'Đang tải...'}</p>
            </div>
            <div className="date-selector">
                <h2>Chọn ngày để xem giá vàng</h2>
                <label htmlFor="dateInput">Chọn ngày:</label>
                <input
                    type="date"
                    id="dateInput"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                <button onClick={fetchGoldPrice}>Xem giá vàng</button>
                <div id="goldPriceResult">
                    {goldPrice !== null && (
                        <p>Giá vàng ngày {selectedDate}: {goldPrice} USD</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GoldPriceTracker;
