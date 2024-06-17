import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Use useNavigate


import necklace1 from "assets/users/images/vongco/vongconam/1.png";
import necklace2 from "assets/users/images/vongco/vongconam/2.jpg";
import necklace3 from "assets/users/images/vongco/vongconam/3.png";
import necklace4 from "assets/users/images/vongco/vongconam/4.jpg";
import necklace5 from "assets/users/images/vongco/vongconam/5.jpg";
import necklace6 from "assets/users/images/vongco/vongconam/6.jpg";
import necklace7 from "assets/users/images/vongco/vongconam/7.jpg";
import necklace8 from "assets/users/images/vongco/vongconam/8.jpg";
import necklace9 from "assets/users/images/vongco/vongconam/9.webp";
import necklace10 from "assets/users/images/vongco/vongconam/10.jpg";

import "./style.scss";

const ITEMS_PER_PAGE = 16;

const images = [
    { id: 'necklace1', src: necklace1, name: "Necklace MS001" },
    { id: 'necklace2', src: necklace2, name: "Necklace MS002" },
    { id: 'necklace3', src: necklace3, name: "Necklace MS003" },
    { id: 'necklace4', src: necklace4, name: "Necklace MS004" },
    { id: 'necklace5', src: necklace5, name: "Necklace MS005" },
    { id: 'necklace6', src: necklace6, name: "Necklace MS006" },
    { id: 'necklace7', src: necklace7, name: "Necklace MS007" },
    { id: 'necklace8', src: necklace8, name: "Necklace MS008" },
    { id: 'necklace9', src: necklace9, name: "Necklace MS009" },
    { id: 'necklace10', src: necklace10, name: "Necklace MS010" },
];

const NecklaceMen = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();  // Use useNavigate

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleImageClick = (id) => {
        navigate(`/product/${id}`);  // Navigate to the product detail page
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

export default memo(NecklaceMen);