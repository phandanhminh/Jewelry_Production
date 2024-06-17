import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Use useNavigate


import bracelet11 from "assets/users/images/vongtay/vongtaynu/1.jpg";
import bracelet12 from "assets/users/images/vongtay/vongtaynu/2.png";
import bracelet13 from "assets/users/images/vongtay/vongtaynu/3.jpg";
import bracelet14 from "assets/users/images/vongtay/vongtaynu/4.webp";
import bracelet15 from "assets/users/images/vongtay/vongtaynu/5.jpg";
import bracelet16 from "assets/users/images/vongtay/vongtaynu/6.jpg";
import bracelet17 from "assets/users/images/vongtay/vongtaynu/7.webp";
import bracelet18 from "assets/users/images/vongtay/vongtaynu/8.webp";
import bracelet19 from "assets/users/images/vongtay/vongtaynu/9.png";
import bracelet20 from "assets/users/images/vongtay/vongtaynu/10.webp";


import "./style.scss";

const ITEMS_PER_PAGE = 16;

const images = [
   
    { id: 'bracelet11', src: bracelet11, name: "Bracelet Women MS001" },
    { id: 'bracelet12', src: bracelet12, name: "Bracelet Women MS002" },
    { id: 'bracelet13', src: bracelet13, name: "Bracelet Women MS003" },
    { id: 'bracelet14', src: bracelet14, name: "Bracelet Women MS004" },
    { id: 'bracelet15', src: bracelet15, name: "Bracelet Women MS005" },
    { id: 'bracelet16', src: bracelet16, name: "Bracelet Women MS006" },
    { id: 'bracelet17', src: bracelet17, name: "Bracelet Women MS007" },
    { id: 'bracelet18', src: bracelet18, name: "Bracelet Women MS008" },
    { id: 'bracelet19', src: bracelet19, name: "Bracelet Women MS009" },
    { id: 'bracelet20', src: bracelet20, name: "Bracelet Women MS010" },
];

const BraceletWomen = () => {
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

export default memo(BraceletWomen);