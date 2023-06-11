import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import NonVeg from "../Assets/non-veg.jpg"
import Veg from "../Assets/veg.jpg"
import { Link , useNavigate } from "react-router-dom";
const Work = () => {
  const navigate = useNavigate();
  const workInfoData = [
    {
      // image: PickMeals,
      image : NonVeg,
      title: "Non-Vegetarian",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      address : "/nonveg"
    },
    {
      image: Veg,
      title: "Vegetarian",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      address : "/veg"
    },
    // {
    //   image: DeliveryMeals,
    //   title: "Fast Deliveries",
    //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    // },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Menu</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          {/* Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam. */}
          There are two different tiffin services i.e vegetarian and non-vegetarian.  Select the category to want to avail.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
         
          <div className="work-section-info" key={data.title} onClick={()=>{navigate(`${data.address}`)}}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="category-img"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Work;
