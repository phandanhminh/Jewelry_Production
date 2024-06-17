import React, { memo, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import './style.scss';

const ITEMS_PER_PAGE = 16;

const BraceletPages = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const loadProducts = () => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        console.log(storedProducts);
        if (storedProducts) {
            setProducts(storedProducts.filter(product => product.type === 'RingMen'));
        }
    };

    useEffect(() => {
        loadProducts();
        window.addEventListener('storage', loadProducts);
        return () => {
            window.removeEventListener('storage', loadProducts);
        };
    }, []);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleImageClick = (index) => {
        navigate(`/product/${index}`);  // Điều hướng đến trang chi tiết sản phẩm với ID
    };

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentProducts = products.slice(offset, offset + ITEMS_PER_PAGE);

    return (
        <div className="container container_categories_slider">
            <div className="container_categories_slider">
                <div className="images-grid">
                    {currentProducts.map((product, index) => (
                        <div
                            key={index}
                            className="image-item"
                            onClick={() => handleImageClick(index)}  // Add onClick to each image
                        >
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${product.image})` }}
                            >
                                <p>{product.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(products.length / ITEMS_PER_PAGE)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
};
export default memo(BraceletPages);