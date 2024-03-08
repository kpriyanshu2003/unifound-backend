import "../styles/Home.css";
import img from "../assets/l&f.png";
import brand from "../assets/brand.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const HomeCard = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") window.location.href = "/lost";
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="home-container">
      <div className="home-container-left">
        <img
          id="dog"
          src={img}
          width="100%"
          draggable="false"
          alt="person-searching-something"
        />
      </div>
      <div className="home-container-right">
        <div id="logoff" className="brand">
          <div>
            <img id="logoimg" src={brand} alt="Logo" height={50} width={75} />
          </div>
          <div id="ltf">UniFound</div>
          <div>Your treasure awaits you here</div>
        </div>
        <div id="info">
          A Web application focused on listing lost and found items around the
          college campus.
        </div>
        <Link to="/lost" className="button">
          <button class="btn">
            <span class="underlineAni"> Let's get started </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="60"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
