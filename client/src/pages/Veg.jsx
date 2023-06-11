import React from 'react'
import Layout from '../Components/Layout';
import BannerBackground from "../Assets/home-banner-background.png";
import Vg from "../Assets/veg.jpg";
import { useEffect } from 'react';

const Veg = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  })

    const workInfoData = [
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          // image: PickMeals,
          image : Vg,
          title: "Vegetarian",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        // {
        //   image: DeliveryMeals,
        //   title: "Fast Deliveries",
        //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        // },
      ];


  return (
    <Layout>
        
        <div className="SignUp-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    </div>

    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">Vegetarian</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="category-img"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default Veg