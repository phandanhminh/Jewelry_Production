import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.scss';
import { BiLogoMessenger } from 'react-icons/bi';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            const selectedProduct = storedProducts[parseInt(id, 10)];
            setProduct(selectedProduct);
        }
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const addToCart = () => {
        // Logic để thêm sản phẩm vào giỏ hàng
        console.log(`Added ${quantity} of ${product.name} to cart`);
    };

    return (
        <div className="product-page">
            <div className="product-details">
                <img src={product.image} alt={product.name} />
                <div className="details">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Count in Stock:</strong> {product.countInStock}</p>
                    <div className="quantity-selector">
                        <span><strong>Quantity:</strong></span>
                        <button className="decrease" onClick={decreaseQuantity}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="increase" onClick={increaseQuantity}>+</button>
                    </div>
                    <div className="actions">
                        <Link to="#" className="messenger-button">
                            <BiLogoMessenger className="messenger-icon" />
                            Contact Messenger
                        </Link>
                        <Link to="#" onClick={addToCart}>Thêm vào giỏ</Link>
                        <Link to="#">Mua ngay</Link>
                        <Link to="#">Chat Zalo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;