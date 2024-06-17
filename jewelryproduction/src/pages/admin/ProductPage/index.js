import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import './style.scss'; // Import CSS file for styling

const AdminProductPage = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentProductIndex, setCurrentProductIndex] = useState(null);

    // Load products from localStorage on component mount
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    const [newProduct, setNewProduct] = useState({
        name: '',
        type: '',
        countInStock: '',
        price: '',
        description: '',
        rating: '',
        discount: '',
        image: ''
    });

    const handleCreateClick = () => {
        setShowCreateForm(true);
    };

    const handleCloseForm = () => {
        setShowCreateForm(false);
        setShowEditForm(false);
        setNewProduct({
            name: '',
            type: '',
            countInStock: '',
            price: '',
            description: '',
            rating: '',
            discount: '',
            image: ''
        });
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setNewProduct(prevState => ({
                    ...prevState,
                    [name]: fileReader.result
                }));
            };
            if (files[0]) {
                fileReader.readAsDataURL(files[0]);
            }
        } else {
            setNewProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts)); // Save to localStorage
        setShowCreateForm(false);
        setNewProduct({
            name: '',
            type: '',
            countInStock: '',
            price: '',
            description: '',
            rating: '',
            discount: '',
            image: ''
        });
    };

    const handleEditClick = (index) => {
        setCurrentProductIndex(index);
        setNewProduct(products[index]);
        setShowEditForm(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedProducts = products.map((product, index) =>
            index === currentProductIndex ? newProduct : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts)); // Save to localStorage
        setShowEditForm(false);
        setNewProduct({
            name: '',
            type: '',
            countInStock: '',
            price: '',
            description: '',
            rating: '',
            discount: '',
            image: ''
        });
    };

    const handleDelete = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(newProducts)); // Save to localStorage
    };

    return (
        <div className="admin-product-page">
            <div className="header">
                <h1 className="header2">Product Manager</h1>
                <button className="create-button" onClick={handleCreateClick}>
                    <FaPlus />
                </button>
            </div>
            {showCreateForm && (
                <div className="popup">
                    <div className="popup-inner">
                        <span className="popup-close" onClick={handleCloseForm}><IoCloseOutline /></span>
                        <h2 className="popup-inner1">Tạo sản phẩm</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
                            </label>
                            <label>
                                Type:
                                <select name="type" value={newProduct.type} onChange={handleChange} required>
                                    <option value="">Select type</option>
                                    <option value="RingMen">RingMen</option>
                                    <option value="BraceletMen">BraceletMen</option>
                                    <option value="NecklaceMen">NecklaceMen</option>
                                    <option value="RingWomen">RingWomen</option>
                                    <option value="BraceletWomen">BraceletWomen</option>
                                    <option value="NecklaceWomen">NecklaceWomen</option>
                                </select>
                            </label>
                            <label>
                                Count in Stock:
                                <input type="number" name="countInStock" value={newProduct.countInStock} onChange={handleChange} required />
                            </label>
                            <label>
                                Price:
                                <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
                            </label>
                            <label>
                                Description:
                                <textarea name="description" value={newProduct.description} onChange={handleChange} required></textarea>
                            </label>
                            <label>
                                Rating:
                                <input type="number" name="rating" step="0.1" value={newProduct.rating} onChange={handleChange} required />
                            </label>
                            <label>
                                Image:
                                <input type="file" name="image" onChange={handleChange} required />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            {showEditForm && (
                <div className="popup">
                    <div className="popup-inner">
                        <span className="popup-close" onClick={handleCloseForm}><IoCloseOutline /></span>
                        <h2>Chỉnh sửa sản phẩm</h2>
                        <form onSubmit={handleUpdate}>
                            <label>
                                Name:
                                <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
                            </label>
                            <label>
                                Type:
                                <select name="type" value={newProduct.type} onChange={handleChange} required>
                                    <option value="">Select type</option>
                                    <option value="RingMen">RingMen</option>
                                    <option value="BraceletMen">BraceletMen</option>
                                    <option value="NecklaceMen">NecklaceMen</option>
                                    <option value="RingWomen">RingWomen</option>
                                    <option value="BraceletWomen">BraceletWomen</option>
                                    <option value="NecklaceWomen">NecklaceWomen</option>
                                </select>
                            </label>
                            <label>
                                Count in Stock:
                                <input type="number" name="countInStock" value={newProduct.countInStock} onChange={handleChange} required />
                            </label>
                            <label>
                                Price:
                                <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
                            </label>
                            <label>
                                Description:
                                <textarea name="description" value={newProduct.description} onChange={handleChange} required></textarea>
                            </label>
                            <label>
                                Rating:
                                <input type="number" name="rating" step="0.1" value={newProduct.rating} onChange={handleChange} required />
                            </label>
                            <label>
                                Image:
                                <input type="file" name="image" onChange={handleChange} required />
                            </label>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            )}
            <div className="product-list">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Type</th>
                            <th className="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.rating}</td>
                                <td>{product.type}</td>
                                <td className="action">
                                    <MdOutlineDelete className="action-icon" onClick={() => handleDelete(index)} />
                                    <MdOutlineEdit className="action-icon" onClick={() => handleEditClick(index)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductPage;