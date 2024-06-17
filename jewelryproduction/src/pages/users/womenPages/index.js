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
    { id: 'bracelet11', src: bracelet11, name: "BraceletWomen MS001" },
    { id: 'bracelet12', src: bracelet12, name: "BraceletWomen MS002" },
    { id: 'bracelet13', src: bracelet13, name: "BraceletWomen MS003" },
    { id: 'bracelet14', src: bracelet14, name: "BraceletWomen MS004" },
    { id: 'bracelet15', src: bracelet15, name: "BraceletWomen MS005" },
    { id: 'bracelet16', src: bracelet16, name: "BraceletWomen MS006" },
    { id: 'bracelet17', src: bracelet17, name: "BraceletWomen MS007" },
    { id: 'bracelet18', src: bracelet18, name: "BraceletWomen MS008" },
    { id: 'bracelet19', src: bracelet19, name: "BraceletWomen MS009" },
    { id: 'bracelet20', src: bracelet20, name: "BraceletWomen MS010" },
];

const WomenPages = () => {
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

export default memo(WomenPages);