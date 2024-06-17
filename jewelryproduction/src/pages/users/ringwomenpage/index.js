import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Use useNavigate


import ring11 from "assets/users/images/nhancuoi/1.png";
import ring12 from "assets/users/images/nhancuoi/2.jpg";
import ring13 from "assets/users/images/nhancuoi/3.webp";
import ring14 from "assets/users/images/nhancuoi/4.webp";
import ring15 from "assets/users/images/nhancuoi/5.jpg";
import ring16 from "assets/users/images/nhancuoi/6.webp";
import ring17 from "assets/users/images/nhancuoi/7.jpg";
import ring18 from "assets/users/images/nhancuoi/8.webp";
import ring19 from "assets/users/images/nhancuoi/9.jpg";
import ring20 from "assets/users/images/nhancuoi/10.jpg";
import "./style.scss";

const ITEMS_PER_PAGE = 16;

const images = [
    { id: 'ring11', src: ring11, name: "Rings Women MS001" },
    { id: 'ring12', src: ring12, name: "Rings Women MS002" },
    { id: 'ring13', src: ring13, name: "Rings Women MS003" },
    { id: 'ring14', src: ring14, name: "Rings Women MS004" },
    { id: 'ring15', src: ring15, name: "Rings Women MS005" },
    { id: 'ring16', src: ring16, name: "Rings Women MS006" },
    { id: 'ring17', src: ring17, name: "Rings Women MS007" },
    { id: 'ring18', src: ring18, name: "Rings Women MS008" },
    { id: 'ring19', src: ring19, name: "Rings Women MS009" },
    { id: 'ring20', src: ring20, name: "Rings Women MS010" },
    
];

const RingwomenPage = () => {
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

export default memo(RingwomenPage);