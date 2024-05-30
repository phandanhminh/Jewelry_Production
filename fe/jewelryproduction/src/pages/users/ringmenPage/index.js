import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Sử dụng useNavigate

import rich1 from "assets/users/images/nhan/nhannam/1.webp";
import rich2 from "assets/users/images/nhan/nhannam/2.jpg";
import rich3 from "assets/users/images/nhan/nhannam/3.jpg";
import rich4 from "assets/users/images/nhan/nhannam/4.jpg";
import rich5 from "assets/users/images/nhan/nhannam/5.jpg";
import rich6 from "assets/users/images/nhan/nhannam/6.jpg";
import rich7 from "assets/users/images/nhan/nhannam/7.webp";
import rich8 from "assets/users/images/nhan/nhannam/8.jpg";
import rich9 from "assets/users/images/nhan/nhannam/9.jpg";
import rich10 from "assets/users/images/nhan/nhannam/10.jpg";

import "./style.scss";

const ITEMS_PER_PAGE = 16;

const images = [
    { id: 'rich1', src: rich1, name: "Rich MS001" },
    { id: 'rich2', src: rich2, name: "Rich MS002" },
    { id: 'rich3', src: rich3, name: "Rich MS003" },
    { id: 'rich4', src: rich4, name: "Rich MS004" },
    { id: 'rich5', src: rich5, name: "Rich MS005" },
    { id: 'rich6', src: rich6, name: "Rich MS006" },
    { id: 'rich7', src: rich7, name: "Rich MS007" },
    { id: 'rich8', src: rich8, name: "Rich MS008" },
    { id: 'rich9', src: rich9, name: "Rich MS009" },
    { id: 'rich10', src: rich10, name: "Rich MS010" },

];

const RingMen = () => {  // Tên component viết hoa chữ cái đầu
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleImageClick = (id) => {
        navigate(`/product/${id}`);  // Điều hướng đến trang chi tiết sản phẩm
    };

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentImages = images.slice(offset, offset + ITEMS_PER_PAGE);

    return (
        <div className="container container_categories_slider">
            <div  className="container_categories_slider">
                <div className="images-grid">
                    {currentImages.map((image, index) => (
                        <div 
                            key={index} 
                            className="image-item" 
                            onClick={() => handleImageClick(image.id)}  // Add onClick to each image
                        >
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${image.src})` }}
                            >
                                <p>{image.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(images.length / ITEMS_PER_PAGE)}
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

export default memo(RingMen);