import React from 'react';
import './style.scss';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="product-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên sản phẩm</th>
          <th>Doanh thu</th>
          <th>Chi phí</th>
          <th>Lợi nhuận</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.revenue}</td>
            <td>{product.cost}</td>
            <td>
              <button onClick={() => onEdit(product)}>Sửa</button>
              <button onClick={() => onDelete(product.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;