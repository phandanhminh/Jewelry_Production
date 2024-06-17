// src/admin/ProductManagement.js
import React, { useState, useEffect } from 'react';
import './style.scss';
import ProductForm from '../ProductPage';
import ProductList from '../ProducList';
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddProduct = (product) => {
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(newProduct => setProducts([...products, newProduct]));
  };

  const handleEditProduct = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(updatedProduct => {
        setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
        setCurrentProduct(null);
      });
  };

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => setProducts(products.filter(product => product.id !== id)));
  };

  return (
    <div className="product-management">
      <ProductForm onSubmit={handleAddProduct} currentProduct={currentProduct} />
      <ProductList products={products} onEdit={setCurrentProduct} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductManagement;