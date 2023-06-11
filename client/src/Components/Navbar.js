/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import classes from './navbar.module.css'
import { useEffect } from 'react'
import { logout } from '../redux/authSlice'
import { AiOutlineClose, AiOutlineFileImage } from 'react-icons/ai'
import axios from "axios"

const Navbar = () => {

  const { user } = useSelector((state) => state.auth)
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 
  const handleLogout = () => {
    dispatch(logout())
    navigate("/signin")
  }



  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav >
      <div className="nav-logo-container">
        {/* <img src={Logo} alt="" /> */}
        <h2>TiffinTray</h2>
      </div>
      <div className="navbar-links-container">
        {/* <Link to="/test">Home</Link> */}
        <Link to="/">Home</Link>
        {/* <a href="">About</a> */}
        <Link to="/listTiffin">List Service</Link>
        <a href="#contact">Contact</a>
        {/* <Link to="/mysubscriptions">
          <BsCart2 className="navbar-cart-icon" />
        </Link> */}
        
        {!user ?
          <Link to="/signup"><button className="primary-button">Profile</button></Link>
          :
         <>
          <span className="primary-button" onClick={() => setShowModal(prev => !prev)}>Hello {user.name}!</span>
          {showModal && (
            <div className={classes.userModal}>
              <AiOutlineClose onClick={() => setShowModal(prev => !prev)} className={classes.userModalClose} />
              <span className={classes.logoutBtn} onClick={handleLogout}>Logout</span>
              <Link  to={`/my-profile`} onClick={() => setShowModal(prev => !prev)} className={classes.myProfile}>My Profile</Link> 
            </div>
          )}
         </>
      
      }

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

    </nav>
  );
};

export default Navbar;
