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
import necklace11 from "assets/users/images/vongco/vongconu/1.jpg";
import necklace12 from "assets/users/images/vongco/vongconu/2.jpg";
import necklace13 from "assets/users/images/vongco/vongconu/3.jpg";
import necklace14 from "assets/users/images/vongco/vongconu/4.jpg";
import necklace15 from "assets/users/images/vongco/vongconu/5.webp";
import necklace16 from "assets/users/images/vongco/vongconu/6.jpg";
import necklace17 from "assets/users/images/vongco/vongconu/7.jpg";
import necklace18 from "assets/users/images/vongco/vongconu/8.jpg";
import necklace19 from "assets/users/images/vongco/vongconu/9.webp";
import necklace20 from "assets/users/images/vongco/vongconu/10.jpg";
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
    { id: 'necklace11', src: necklace11, name: "Necklace Women MS001" },
    { id: 'necklace12', src: necklace12, name: "Necklace Women MS002" },
    { id: 'necklace13', src: necklace13, name: "Necklace Women MS003" },
    { id: 'necklace14', src: necklace14, name: "Necklace Women MS004" },
    { id: 'necklace15', src: necklace15, name: "Necklace Women MS005" },
    { id: 'necklace16', src: necklace16, name: "Necklace Women MS006" },
    { id: 'necklace17', src: necklace17, name: "Necklace Women MS007" },
    { id: 'necklace18', src: necklace18, name: "Necklace Women MS008" },
    { id: 'necklace19', src: necklace19, name: "Necklace Women MS009" },
    { id: 'necklace20', src: necklace20, name: "Necklace Women MS010" },
];

const NecklacePages = () => {
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

export default memo(NecklacePages);