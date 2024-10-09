
import React, { useState, useEffect } from 'react';
import '../index.css';
import Rajwada from "../Assets/Rajwada.png";
import Foodhub from "../Assets/Foodhub.png";
import image1 from "../Assets/image1.png";
import pohaJalebi from "../Assets/poha-jalebi.png";
import gandhiHall from "../Assets/gandhihall.png";
import Lalbagh from "../Assets/lalbagh.png";

const images = [Rajwada, Foodhub, image1, pohaJalebi, gandhiHall, Lalbagh];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='Big'>
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}

     
    </div>
    <div className="About">
        <h1>About E-Office</h1>
        <p>The Indore Municipal Corporation's eOffice platform enhances government efficiency by automating the file management process. Employees benefit from a digital workflow covering all stages, from Tapal creation to final orders, reducing paperwork and enabling real-time file tracking. It facilitates collaboration across departments, providing quick access to essential documents for faster decision making. eOffice ultimately boosts productivity, allowing employees to focus on improving service delivery and governance</p>
    </div>
    </div>
     
  );
};

export default Home;

