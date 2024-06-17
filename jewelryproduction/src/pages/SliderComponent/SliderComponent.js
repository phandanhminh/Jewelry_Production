import React, { useEffect, useState } from "react";
import img2 from "assets/users/images/anhbia/3.webp";
import img3 from "assets/users/images/anhbia/4.jpg";
import img4 from "assets/users/images/anhbia/5.jpg";
import img5 from "assets/users/images/anhbia/7.webp";
import img6 from "assets/users/images/anhbia/8.jpg";
import "./style.scss";

const SliderComponent = () => {
  const images = [
    img2,
    img3,
    img4,
    img5,
    img6,
    // Thêm đường dẫn đến các hình ảnh khác ở đây
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Thay đổi ảnh mỗi 5 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img src={image} alt={`Slideshow Image ${index}`} className="slider-image" key={index} />
        ))}
      </div>
      <button className="prev-arrow" onClick={prevSlide}></button>
      <button className="next-arrow" onClick={nextSlide}></button>
    </div>
  );
};

export default SliderComponent;