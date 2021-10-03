<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import bg_svg from "../images/bg_svg.png";
import Home_phone_logo from "../images/Home_phone_logo.png";
import achivement_phone_logo from "../images/achivement_phone_logo.png";
import schedule_phone_logo from "../images/schedule_phone_logo.png";
import calender_phone_logo from "../images/calender_phone_logo.png";
import idea_phone_logo from "../images/idea_phone_logo.png";
import contact_phone_logo from "../images/contact_phone_logo.png";
import contact_Us_phone_logo from "../images/contact_Us_phone_logo.png";
=======
import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/images/logo.png";
import Home_phone_logo from "../styles/images/Home_phone_logo.png";
import schedule_phone_logo from "../styles/images/schedule_phone_logo.png";
import idea_phone_logo from "../styles/images/idea_phone_logo.png";
import contact_phone_logo from "../styles/images/contact_phone_logo.png";
>>>>>>> 3ba1ba7a854ad007b28425f788b34083ff683edf

const NavBar = (props) => {
  return (
    <nav className="header-nav">
      <div className="navbar_desktop">
<<<<<<< HEAD
        <img src={logo} alt="ffdf" className="logo" />
=======
        <img src={logo} alt="logo" className="logo" />
>>>>>>> 3ba1ba7a854ad007b28425f788b34083ff683edf
        <div className="Nav_links">
          <Link to="/" className="Link">
            Home
          </Link>
<<<<<<< HEAD
          {/* <Link to="#AboutPage" className="Link">
            About
          </Link> */}
          <Link to="/Schedule" className="Link">
            {" "}
            Events
          </Link>
          <Link to="#ProjectsPage" className="Link">
            Projects
          </Link>
          <Link to="/Team_Members" className="Link">
=======
          <Link to="/events" className="Link">
            Events
          </Link>
          <Link to="/projects" className="Link">
            Projects
          </Link>
          <Link to="/core-team" className="Link">
>>>>>>> 3ba1ba7a854ad007b28425f788b34083ff683edf
            Core Team
          </Link>
        </div>
      </div>

      <div className="phone_navbar">
<<<<<<< HEAD
        <Link to="#HomePage" className="Link">
          <img src={Home_phone_logo} alt="" />
        </Link>
        <Link to="#AboutPage" className="Link">
          <img src={achivement_phone_logo} alt="" />
        </Link>
        <Link to="/Schedule" className="Link">
          <img src={schedule_phone_logo} alt="" />
        </Link>
        <Link to="#ProjectsPage" className="Link">
          <img src={idea_phone_logo} alt="" />
        </Link>
        <Link to="/Team_Members" className="Link">
=======
        <Link to="/" className="Link">
          <img src={Home_phone_logo} alt="" />
        </Link>
        <Link to="/events" className="Link">
          <img src={schedule_phone_logo} alt="" />
        </Link>
        <Link to="/projects" className="Link">
          <img src={idea_phone_logo} alt="" />
        </Link>
        <Link to="/core-team" className="Link">
>>>>>>> 3ba1ba7a854ad007b28425f788b34083ff683edf
          <img src={contact_phone_logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
