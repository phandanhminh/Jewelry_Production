import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";  // Use useNavigate

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
    { id: 'ring11', src: ring11, name: "Wedding Rings MS001" },
    { id: 'ring12', src: ring12, name: "Wedding Rings MS002" },
    { id: 'ring13', src: ring13, name: "Wedding Rings MS003" },
    { id: 'ring14', src: ring14, name: "Wedding Rings MS004" },
    { id: 'ring15', src: ring15, name: "Wedding Rings MS005" },
    { id: 'ring16', src: ring16, name: "Wedding Rings MS006" },
    { id: 'ring17', src: ring17, name: "Wedding Rings MS007" },
    { id: 'ring18', src: ring18, name: "Wedding Rings MS008" },
    { id: 'ring19', src: ring19, name: "Wedding Rings MS009" },
    { id: 'ring20', src: ring20, name: "Wedding Rings MS010" },
    { id: 'bracelet1', src: bracelet1, name: "Bracelet MS001" },
    { id: 'bracelet2', src: bracelet2, name: "Bracelet MS002" },
    { id: 'bracelet3', src: bracelet3, name: "Bracelet MS003" },
    { id: 'bracelet4', src: bracelet4, name: "Bracelet MS004" },
    { id: 'bracelet5', src: bracelet5, name: "Bracelet MS005" },
    { id: 'bracelet6', src: bracelet6, name: "Bracelet MS006" },
    { id: 'bracelet7', src: bracelet7, name: "Bracelet MS007" },
    { id: 'bracelet8', src: bracelet8, name: "Bracelet MS008" },
    { id: 'bracelet9', src: bracelet9, name: "Bracelet MS009" },
    { id: 'bracelet10', src: bracelet10, name: "Bracelet MS010" },
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

const JewelryPages = () => {
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

export default memo(JewelryPages);