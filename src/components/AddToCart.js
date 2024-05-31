import React from "react";

const AddToCart = ({ quantity, onQuantityChange, onAddToCart }) => {
    return (
        <div className="add-to-cart">
            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={onQuantityChange}
                min="1"
            />
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};

export default AddToCart;
