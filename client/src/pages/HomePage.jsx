import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import About from "../Components/About";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";

import { FiArrowRight } from "react-icons/fi";
import ThaliImage from "../Assets/thali2.png"
import Layout from "../Components/Layout";
import Hero from "../Components/hero/Hero";



const HomePage = () => {
  return (
    <div className="home-container">
      <Layout>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            {/* Your Favourite Food Delivered Hot & Fresh */}
            Delivering Homemade Goodness In Your Meals 
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <a className="secondary-button" href="#workSection">
            Order Now <FiArrowRight />
          </a>
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
          <img src={ThaliImage} alt="" className="rotate"/>
          
        </div>
      </div>

      <About />
      <div id="workSection">
      {/* <Work /> */}
      <Hero />
      </div>
      {/* <Testimonial /> */}
      <div id="contact">
      <Contact />
      </div>
    </Layout>
    </div>
  );
};

export default HomePage;
