import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar';
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome 
    },
    {
      name: "Recepies",
      path: "/recepies",
      icon: faList
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog
    }
  ]
  return (
    <>
    <div className="navbar container">
      <a href="#!" className="logo">F<span>oo</span>diesInfo</a>
      <div className="nav-links">
        {
          links.map(link => (
            <a href="#!" key={link.name}>{link.name}</a>
          ))
        }
        {/* <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a> */}
      </div>
      <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" :"sidebar-btn"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    {showSidebar && <Sidebar links={links} /> }
    </>
  )
}

export default Navbar
