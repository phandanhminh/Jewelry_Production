import {memo} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import ring19 from "assets/users/images/nhancuoi/9.jpg";
import ring20 from "assets/users/images/nhancuoi/10.jpg";
import ring18 from "assets/users/images/nhancuoi/8.webp";
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
const HomePage = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };
      const richSliderItems = [
        { bgImg: rich1, name: "Rich MS001" },
        { bgImg: rich2, name: "Rich MS002" },
        { bgImg: rich3, name: "Rich MS003" },
        { bgImg: rich4, name: "Rich MS004" },
        { bgImg: rich5, name: "Rich MS005" },
        { bgImg: rich6, name: "Rich MS006" },
        { bgImg: rich7, name: "Rich MS007" },
        { bgImg: rich8, name: "Rich MS008" },
        { bgImg: rich9, name: "Rich MS009" },
        { bgImg: rich10, name: "Rich MS010" },
    ];
    const weddingSliderItems = [
      { bgImg: ring11, name: "Wedding Rings MS001" },
      { bgImg: ring12, name: "Wedding Rings MS002" },
      { bgImg: ring13, name: "Wedding Rings MS003" },
      { bgImg: ring14, name: "Wedding Rings MS004" },
      { bgImg: ring15, name: "Wedding Rings MS005" },
      { bgImg: ring16, name: "Wedding Rings MS006" },
      { bgImg: ring17, name: "Wedding Rings MS007" },
      { bgImg: ring18, name: "Wedding Rings MS008" },
      { bgImg: ring19, name: "Wedding Rings MS009" },
      { bgImg: ring20, name: "Wedding Rings MS010" },
    ];
    const braceletItems = [
      { bgImg: bracelet1, name: "Bracelet MS001" },
      { bgImg: bracelet2, name: "Bracelet MS002" },
      { bgImg: bracelet3, name: "Bracelet MS003" },
      { bgImg: bracelet4, name: "Bracelet MS004" },
      { bgImg: bracelet5, name: "Bracelet MS005" },
      { bgImg: bracelet6, name: "Bracelet MS006" },
      { bgImg: bracelet7, name: "Bracelet MS007" },
      { bgImg: bracelet8, name: "Bracelet MS008" },
      { bgImg: bracelet9, name: "Bracelet MS009" },
      { bgImg: bracelet10, name: "Bracelet MS010" },
  ];
  
  return (
    <div className="container container_categories_slider">
        <hr className="divider" />
        <div className="container_name">Rich Mens</div>
        <Carousel responsive={responsive} className="categories_slider">
            {richSliderItems.map((item, key) => (
                <div
                    className="categories_slider_item"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                    key={key}
                >
                    <p>{item.name}</p>
                </div>
            ))}
        </Carousel>

        <hr className="divider1" />
        <div className="container_name">Wedding Rings</div>
        <Carousel responsive={responsive} className="categories_slider">
            {weddingSliderItems.map((item, key) => (
                <div
                    className="categories_slider_item"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                    key={key}
                >
                    <p>{item.name}</p>
                </div>
            ))}
        </Carousel>

        <hr className="divider2" />
        <div className="container_name">Bracelets</div>
        <Carousel responsive={responsive} className="categories_slider">
            {braceletItems.map((item, key) => (
                <div
                    className="categories_slider_item"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                    key={key}
                >
                    <p>{item.name}</p>
                </div>
            ))}
        </Carousel>
    </div>
);
};
export default memo(HomePage);
