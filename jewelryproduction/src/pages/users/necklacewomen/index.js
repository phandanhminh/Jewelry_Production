import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Use useNavigate


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
    { id: 'necklace11', src: necklace11, name: "Necklace MS001" },
    { id: 'necklace12', src: necklace12, name: "Necklace MS002" },
    { id: 'necklace13', src: necklace13, name: "Necklace MS003" },
    { id: 'necklace14', src: necklace14, name: "Necklace MS004" },
    { id: 'necklace15', src: necklace15, name: "Necklace MS005" },
    { id: 'necklace16', src: necklace16, name: "Necklace MS006" },
    { id: 'necklace17', src: necklace17, name: "Necklace MS007" },
    { id: 'necklace18', src: necklace18, name: "Necklace MS008" },
    { id: 'necklace19', src: necklace19, name: "Necklace MS009" },
    { id: 'necklace20', src: necklace20, name: "Necklace MS010" },
];

const Necklacewomen = () => {
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

export default memo(Necklacewomen);