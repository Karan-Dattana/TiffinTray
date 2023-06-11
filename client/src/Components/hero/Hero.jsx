import React, { useState } from 'react'
import classes from "./hero.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const [type , setType ] = useState("veg");
  // const [priceRange , setPriceRange] = useState("0");
  const [location , setLocation] = useState("0"); 
  const navigate = useNavigate();

  const handleSearch = ()=>{
    // navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`)
    navigate(`/tiffins?type=${type}&location=${location}`);
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your the best tiffin service</h2>
        <h5>Choose the the category according to your taste.</h5>
        <div className={classes.options}>
          <select onChange={(event)=>setType(event.target.value)}>
            <option disabled >Select type</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
          {/* <select onChange={(event)=>setPriceRange(event.target.value)}>
            <option disabled>Select price range</option>
            <option value="0">0-100</option>
            <option value="1">100-200</option>
            <option value="2">200-300</option>
            <option value="3">300-400</option>
            <option value="4">400-500</option>
            
          </select> */}
          <select onChange={(event)=>setLocation(event.target.value)}>
            <option disabled >Select Location</option>
            <option value="0">Punjab</option>
            <option value="1">Haryana</option>
            <option value="2">Himachal Pradesh</option>
            <option value="3">Delhi</option>
            <option value="4">Rajasthan</option>
            <option value="5">Gujarat</option>
            
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch}/>
        </div>
      </div>
    </div>
  )
}

export default Hero