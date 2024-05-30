import {memo, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiLogoMessenger, BiLogoYoutube, BiPhone, BiUser } from "react-icons/bi";
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
import SliderComponent from "pages/SliderComponent/SliderComponent";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () =>{
    const navigate = useNavigate(); 
    const handleImageClick = (id) => {
      navigate(`/product/${id}`);
    };
    const[isShowCategories,setShowCategories]=useState(true);
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
    ];
    const weddingSliderItems = [
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
    ];
    const braceletItems = [
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
  ];
  
  return (
    
    <div className="container">
          <div className="row hero_categories_container">
            <div className="col-lg-3 hero_categories">
              <div className="hero_categories_all" onClick={()=> setShowCategories(!isShowCategories)} >
              
                <AiOutlineMenu />
                List Jewelry
              </div>
              
              <ul className={isShowCategories ? "" :"hidden"}>
                <li>
                  <Link to={"#"}>Ring</Link>
                </li>
                <li>
                  <Link to={"#"}>BraceLet</Link>
                </li>
                <li>
                  <Link to={"#"}>NeckLace</Link>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-9 hero_search_container">
              <div className="hero_search">
                <div className="hero_search_form">
                  <form>
                    <input type="" name="" placeholder="What are you looking for?" />
                    <button type="submit">Search</button>
                  </form>
                </div>
                <div className="hero_search_phone">
                  <div className="hero_search_phone_icon">
                    <AiOutlinePhone />
                  </div>
                  <div className="hero_search_phone_text">
                    <p> 0363433416</p>
                    <span>support 24/7</span>
                  </div>
                </div>
              </div>
              <div className="hero_item">
                <div className="hero_text">
                  <span>LiLiLa Shop</span>
                  <h2>
                    Helps you <br/>
                    become noble</h2>
                  <p>Fast Delivery</p>
                  <Link to="" className="primary-btn">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        <div className="container container_categories_slider">
        <hr className="divider" />
        <div className="container_name">Rich Mens</div>
        <Carousel responsive={responsive} className="categories_slider">
            {richSliderItems.map((item, key) => (
                <div
                    className="categories_slider_item"
                    style={{ backgroundImage: `url(${item.src})` }}
                    key={key}
                    onClick={() => handleImageClick(item.id)}
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
                    style={{ backgroundImage: `url(${item.src})` }}
                    key={key}
                    onClick={() => handleImageClick(item.id)}
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
                    style={{ backgroundImage: `url(${item.src})` }}
                    key={key}
                    onClick={() => handleImageClick(item.id)}
                >
                    <p>{item.name}</p>
                </div>
            ))}
        </Carousel>
        <SliderComponent/>
    </div>
        </div>
    
);
};
export default memo(HomePage);
