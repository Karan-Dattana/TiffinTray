import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { arrPriceRanges } from '../../util/idxToPriceRange'
import classes from './properties.module.css'
import { useEffect } from 'react'
import { continentToIdx } from '../../util/idxToContinent'
// import { request } from '../../util/fetchAPI'
import axios from "axios"
import PropertyCard from '../propertyCard/PropertyCard'
import BannerBackground from "../../Assets/home-banner-background.png";
import Navbar from "../Navbar"
import Footer from "../Footer"

const Properties = () => {
  const [allProperties, setAllProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [state, setState] = useState(null)
  const query = (useLocation().search).slice(1) // slice(1) to remove "?"
  const arrQuery = query.split("&")
  const navigate = useNavigate()

  // fetch all properties
  useEffect(() => {
    const fetchAllProperties = async() => {
      // const data = await request(`/property/getAll`, 'GET')
      const data = await axios.get("http://localhost:5000/tiffin/getAll");
      setAllProperties(data.data);

    }
    fetchAllProperties()
  }, [])

  // parsing query params
  useEffect(() => {
    // console.log(allProperties);
    if (arrQuery && allProperties?.length > 0 && state === null) {
      let formattedQuery = {}
      arrQuery.forEach((option, idx) => {
        const key = option.split("=")[0]
        const value = option.split("=")[1]
        
        formattedQuery = { ...formattedQuery, [key]: value }
        
        // if we are on the last index, assign the formattedQuery obj to state
        if (idx === arrQuery.length - 1) {
          setState(prev => formattedQuery)
          handleSearch(formattedQuery)
        }
      })
    }
  }, [allProperties, arrQuery])


  const handleState = (e) => {
    setState(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }


  const handleSearch = (param = state) => {
    let options
    // we either pass the formattedObj or event, that's why we do the IF/ELSE
    if (param?.nativeEvent) {
      options = state
    } else {
      options = param
    }


    const filteredProperties = allProperties.filter((property) => {

      // const priceRange = arrPriceRanges[options.priceRange]
      // const minPrice = Number(priceRange.split('-')[0])
      // const maxPrice = Number(priceRange.split('-')[1])
      const temp = property.location;
      
     if(temp){
      const location = continentToIdx(temp);
      console.log(location);
      // console.log(location);
      // console.log(Number(options.location));
      // console.log(property.category);
      // console.log(options.type);
         if (
        property.category === options.type
        && location === Number(options.location)
        
      ) {
        
        // console.log(property);
        return property
      }
     }

     

    //   console.log("prperty is "+property.continent);
    })

    const queryStr = `type=${options.type}&location=${options.location}`

    navigate(`/tiffins?${queryStr}`, { replace: true })
    setFilteredProperties(prev => filteredProperties)
    // console.log("filtered properties:->");
    // console.log(filteredProperties);
  }



  return (
    <>
    <Navbar />
    <div className="SignUp-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    </div>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.options}>
          {/* <select value={state?.type} name="type" onChange={handleState}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select value={state?.priceRange} name="priceRange" onChange={handleState}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select value={state?.continent} name="continent" onChange={handleState}>
            <option disabled>Select Continent</option>
            <option value="0">Europe</option>
            <option value="1">Asia</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
          </select> */}
          <select onChange={handleState}>
            <option disabled >Select type</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
          <select onChange={handleState}>
            <option disabled >Select Location</option>
            <option value="0">Punjab</option>
            <option value="1">Haryana</option>
            <option value="2">Himachal Pradesh</option>
            <option value="3">Delhi</option>
            <option value="4">Rajasthan</option>
            <option value="5">Gujarat</option>
            
          </select>
          <button className={classes.searchBtn}>
            <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
          </button>
        </div>
        {filteredProperties?.length > 0 ?
          <>
            <div className={classes.titles}>
              <h5>Selected Tiffin Services</h5>
              <h2>Services you may like</h2>
            </div>
            <div className={classes.properties}>
              {filteredProperties.map((property) => (
                <PropertyCard key={property._id} property={property}/>
              ))}
            </div>
          </> : <h2 className={classes.noProperty}>We have no tiffin services with the specified options.</h2>}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Properties