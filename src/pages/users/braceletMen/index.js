import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Sử dụng useNavigate

import bracelet1 from "assets/users/images/vongtay/vongtaynam/1.webp";
import bracelet2 from "assets/users/images/vongtay/vongtaynam/2.jpeg";
import bracelet3 from "assets/users/images/vongtay/vongtaynam/3.jpg";
import bracelet4 from "assets/users/images/vongtay/vongtaynam/4.webp";
import bracelet5 from "assets/users/images/vongtay/vongtaynam/5.jpg";
import bracelet6 from "assets/users/images/vongtay/vongtaynam/6.webp";
import bracelet7 from "assets/users/images/vongtay/vongtaynam/7.jpg";
import bracelet8 from "assets/users/images/vongtay/vongtaynam/8.jpg";
import bracelet9 from "assets/users/images/vongtay/vongtaynam/9.jpg";
import bracelet10 from "assets/users/images/vongtay/vongtaynam/10.webp";

import "./style.scss";

const ITEMS_PER_PAGE = 16;

const images = [
    { id: 'bracelet1', src: bracelet1, name: "Vòng tay MS001" },
    { id: 'bracelet2', src: bracelet2, name: "Vòng tay MS002" },
    { id: 'bracelet3', src: bracelet3, name: "Vòng tay MS003" },
    { id: 'bracelet4', src: bracelet4, name: "Vòng tay MS004" },
    { id: 'bracelet5', src: bracelet5, name: "Vòng tay MS005" },
    { id: 'bracelet6', src: bracelet6, name: "Vòng tay MS006" },
    { id: 'bracelet7', src: bracelet7, name: "Vòng tay MS007" },
    { id: 'bracelet8', src: bracelet8, name: "Vòng tay MS008" },
    { id: 'bracelet9', src: bracelet9, name: "Vòng tay MS009" },
    { id: 'bracelet10', src: bracelet10, name: "Vòng tay MS010" },
];

const BraceletMen = () => {  // Tên component viết hoa chữ cái đầu
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

export default memo(BraceletMen);