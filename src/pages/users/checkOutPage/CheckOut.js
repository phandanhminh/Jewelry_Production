import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckOut.scss';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { totalPrice } = location.state || { totalPrice: 0 };

    useEffect(() => {
        // Tải PayPal SDK
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AeNMb0fYYHO3lNE4W0bR1i7Ld5ZFMIUJDQOX3guFJHwBjXPRAAxdZfl4Ml2quHjDEfAabr_mEGS71JSS`;
        script.async = true;
        script.onload = () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalPrice.toFixed(2),
                            },
                        }],
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert('Thanh toán thành công bởi ' + details.payer.name.given_name);
                        navigate('/');
                    });
                },
                onCancel: (data) => {
                    alert('Thanh toán đã bị hủy.');
                },
                onError: (err) => {
                    console.error('PayPal Checkout Error:', err);
                    alert('Đã xảy ra lỗi trong quá trình thanh toán.');
                }
            }).render('#paypal-button-container');
        };
        document.body.appendChild(script);

        // Cleanup script khi component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, [totalPrice, navigate]);

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <div id="paypal-button-container"></div>
            <button onClick={() => navigate('/cart')}>Back To Cart</button>
        </div>
    );
};

export default Checkout;
