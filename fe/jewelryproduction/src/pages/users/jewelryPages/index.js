import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
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
    { src: rich1, name: "Rich MS001", link: "#" },
    { src: rich2, name: "Rich MS002", link: "#" },
    { src: rich3, name: "Rich MS003", link: "#" },
    { src: rich4, name: "Rich MS004", link: "#" },
    { src: rich5, name: "Rich MS005", link: "#" },
    { src: rich6, name: "Rich MS006", link: "#" },
    { src: rich7, name: "Rich MS007", link: "#" },
    { src: rich8, name: "Rich MS008", link: "#" },
    { src: rich9, name: "Rich MS009", link: "#" },
    { src: rich10, name: "Rich MS010", link: "#" },
    { src: ring11, name: "Wedding Rings MS001", link: "#" },
    { src: ring12, name: "Wedding Rings MS002", link: "#" },
    { src: ring13, name: "Wedding Rings MS003", link: "#" },
    { src: ring14, name: "Wedding Rings MS004", link: "#" },
    { src: ring15, name: "Wedding Rings MS005", link: "#" },
    { src: ring16, name: "Wedding Rings MS006", link: "#" },
    { src: ring17, name: "Wedding Rings MS007", link: "#" },
    { src: ring18, name: "Wedding Rings MS008", link: "#" },
    { src: ring19, name: "Wedding Rings MS009", link: "#" },
    { src: ring20, name: "Wedding Rings MS010", link: "#" },
    { src: bracelet1, name: "Bracelet MS001", link: "#" },
    { src: bracelet2, name: "Bracelet MS002", link: "#" },
    { src: bracelet3, name: "Bracelet MS003", link: "#" },
    { src: bracelet4, name: "Bracelet MS004", link: "#" },
    { src: bracelet5, name: "Bracelet MS005", link: "#" },
    { src: bracelet6, name: "Bracelet MS006", link: "#" },
    { src: bracelet7, name: "Bracelet MS007", link: "#" },
    { src: bracelet8, name: "Bracelet MS008", link: "#" },
    { src: bracelet9, name: "Bracelet MS009", link: "#" },
    { src: bracelet10, name: "Bracelet MS010", link: "#" },
    { src: necklace1, name: "Necklace MS001", link: "#" },
    { src: necklace2, name: "Necklace MS002", link: "#" },
    { src: necklace3, name: "Necklace MS003", link: "#" },
    { src: necklace4, name: "Necklace MS004", link: "#" },
    { src: necklace5, name: "Necklace MS005", link: "#" },
    { src: necklace6, name: "Necklace MS006", link: "#" },
    { src: necklace7, name: "Necklace MS007", link: "#" },
    { src: necklace8, name: "Necklace MS008", link: "#" },
    { src: necklace9, name: "Necklace MS009", link: "#" },
    { src: necklace10, name: "Necklace MS0010", link: "#" },
];

const JewelryPages = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentImages = images.slice(offset, offset + ITEMS_PER_PAGE);

    return (
        <div className="container container_categories_slider">
            <div className="images-grid">
                {currentImages.map((image, index) => (
                    <a key={index} href={image.link} className="image-item">
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${image.src})` }}
                        >
                            <p>{image.name}</p>
                        </div>
                    </a>
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
    );
};

export default memo(JewelryPages);