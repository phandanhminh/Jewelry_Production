import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.scss';

// Import hình ảnh và dữ liệu sản phẩm
import rich1 from 'assets/users/images/nhan/nhannam/1.webp';
import rich2 from 'assets/users/images/nhan/nhannam/2.jpg';
import rich3 from 'assets/users/images/nhan/nhannam/3.jpg';
import rich4 from 'assets/users/images/nhan/nhannam/4.jpg';
import rich5 from 'assets/users/images/nhan/nhannam/5.jpg';
import rich6 from 'assets/users/images/nhan/nhannam/6.jpg';
import rich7 from 'assets/users/images/nhan/nhannam/7.webp';
import rich8 from 'assets/users/images/nhan/nhannam/8.jpg';
import rich9 from 'assets/users/images/nhan/nhannam/9.jpg';
import rich10 from 'assets/users/images/nhan/nhannam/10.jpg';
import ring11 from 'assets/users/images/nhancuoi/1.png';
import ring12 from 'assets/users/images/nhancuoi/2.jpg';
import ring13 from 'assets/users/images/nhancuoi/3.webp';
import ring14 from 'assets/users/images/nhancuoi/4.webp';
import ring15 from 'assets/users/images/nhancuoi/5.jpg';
import ring16 from 'assets/users/images/nhancuoi/6.webp';
import ring17 from 'assets/users/images/nhancuoi/7.jpg';
import ring18 from 'assets/users/images/nhancuoi/8.webp';
import ring19 from 'assets/users/images/nhancuoi/9.jpg';
import ring20 from 'assets/users/images/nhancuoi/10.jpg';
import bracelet1 from 'assets/users/images/vongtay/vongtaynam/1.webp';
import bracelet2 from 'assets/users/images/vongtay/vongtaynam/2.jpeg';
import bracelet3 from 'assets/users/images/vongtay/vongtaynam/3.jpg';
import bracelet4 from 'assets/users/images/vongtay/vongtaynam/4.webp';
import bracelet5 from 'assets/users/images/vongtay/vongtaynam/5.jpg';
import bracelet6 from 'assets/users/images/vongtay/vongtaynam/6.webp';
import bracelet7 from 'assets/users/images/vongtay/vongtaynam/7.jpg';
import bracelet8 from 'assets/users/images/vongtay/vongtaynam/8.jpg';
import bracelet9 from 'assets/users/images/vongtay/vongtaynam/9.jpg';
import bracelet10 from 'assets/users/images/vongtay/vongtaynam/10.webp';
import necklace1 from 'assets/users/images/vongco/vongconam/1.png';
import necklace2 from 'assets/users/images/vongco/vongconam/2.jpg';
import necklace3 from 'assets/users/images/vongco/vongconam/3.png';
import necklace4 from 'assets/users/images/vongco/vongconam/4.jpg';
import necklace5 from 'assets/users/images/vongco/vongconam/5.jpg';
import necklace6 from 'assets/users/images/vongco/vongconam/6.jpg';
import necklace7 from 'assets/users/images/vongco/vongconam/7.jpg';
import necklace8 from 'assets/users/images/vongco/vongconam/8.jpg';
import necklace9 from 'assets/users/images/vongco/vongconam/9.webp';
import necklace10 from 'assets/users/images/vongco/vongconam/10.jpg';
import { BiLogoMessenger } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';

// Dữ liệu sản phẩm
const products = [
    { id: 'rich1', src: rich1, name: "Rich MS001", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich2', src: rich2, name: "Rich MS002", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich3', src: rich3, name: "Rich MS003", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich4', src: rich4, name: "Rich MS004", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich5', src: rich5, name: "Rich MS005", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich6', src: rich6, name: "Rich MS006", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich7', src: rich7, name: "Rich MS007", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich8', src: rich8, name: "Rich MS008", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich9', src: rich9, name: "Rich MS009", description: "Description for Rich MS001", price: "$100" },
    { id: 'rich10', src: rich10, name: "Rich MS010", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring11', src: ring11, name: "Wedding Rings MS001", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring12', src: ring12, name: "Wedding Rings MS002", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring13', src: ring13, name: "Wedding Rings MS003", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring14', src: ring14, name: "Wedding Rings MS004", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring15', src: ring15, name: "Wedding Rings MS005", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring16', src: ring16, name: "Wedding Rings MS006", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring17', src: ring17, name: "Wedding Rings MS007", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring18', src: ring18, name: "Wedding Rings MS008", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring19', src: ring19, name: "Wedding Rings MS009", description: "Description for Rich MS001", price: "$100" },
    { id: 'ring20', src: ring20, name: "Wedding Rings MS010", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet1', src: bracelet1, name: "Bracelet MS001", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet2', src: bracelet2, name: "Bracelet MS002", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet3', src: bracelet3, name: "Bracelet MS003", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet4', src: bracelet4, name: "Bracelet MS004", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet5', src: bracelet5, name: "Bracelet MS005", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet6', src: bracelet6, name: "Bracelet MS006", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet7', src: bracelet7, name: "Bracelet MS007", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet8', src: bracelet8, name: "Bracelet MS008", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet9', src: bracelet9, name: "Bracelet MS009", description: "Description for Rich MS001", price: "$100" },
    { id: 'bracelet10', src: bracelet10, name: "Bracelet MS010", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace1', src: necklace1, name: "Necklace MS001", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace2', src: necklace2, name: "Necklace MS002", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace3', src: necklace3, name: "Necklace MS003", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace4', src: necklace4, name: "Necklace MS004", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace5', src: necklace5, name: "Necklace MS005", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace6', src: necklace6, name: "Necklace MS006", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace7', src: necklace7, name: "Necklace MS007", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace8', src: necklace8, name: "Necklace MS008", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace9', src: necklace9, name: "Necklace MS009", description: "Description for Rich MS001", price: "$100" },
    { id: 'necklace10', src: necklace10, name: "Necklace MS010", description: "Description for Rich MS001", price: "$100" },
];

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
    const [quantity, setQuantity] = React.useState(1);
    if (!product) {
        return <div>Product not found</div>;
    }

    const handleQuantityChange = (e) => {
        const value = Math.max(1, Number(e.target.value));
        setQuantity(value);
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    };

    const addToCart = () => {
        // Logic để thêm sản phẩm vào giỏ hàng
        console.log(`Added ${quantity} of ${product.name} to cart`);
    };

    return (
        <div className="product-page">
            <div className="product-details">
                <img src={product.src} alt={product.name} />
                <div className="details">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    
                    <div className="actions">
                        <label className="quantity-label">
                            Số lượng:
                            <div className="quantity-controls">
                                <button onClick={decrementQuantity} className="quantity-button">-</button>
                                <input 
                                    type="number" 
                                    value={quantity} 
                                    onChange={handleQuantityChange} 
                                    min="1" 
                                    className="quantity-input"
                                />
                                <button onClick={incrementQuantity} className="quantity-button">+</button>
                            </div>
                        </label>
                        <Link to="/messenger" className="messenger-button">
                            <BiLogoMessenger className="messenger-icon" />
                            Contact Messenger
                        </Link>
                        <Link to="" onClick={addToCart}>Thêm vào giỏ</Link>
                        <Link to="">Mua ngay</Link>
                        <Link to="">Chat Zalo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;