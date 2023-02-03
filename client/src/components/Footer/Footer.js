import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-dark" id="contactus">
      <div className="adjust">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h5>NitCsell</h5>
            <NavLink className="nav-link" to="/" style={{ color: "#212529" }}>
              <p className="text-white">Home</p>
            </NavLink>
            <NavLink className="nav-link" to="/products" style={{ color: "#212529" }}>
              <p className="text-white">Products</p>
            </NavLink>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5>&nbsp;&nbsp;</h5>
            <NavLink className="nav-link" to="/events" style={{ color: "#212529" }}>
              <p className="text-white">Events</p>
            </NavLink>
            <NavLink className="nav-link" to="/about" style={{ color: "#212529" }}>
              <p className="text-white">About</p>
            </NavLink>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5>CONTACT US</h5>
            <p>
              Address:{" "}
              <span>
                Central Computer Center, NIT Calicut, Kozhikode, Kerala - 673601
              </span>
            </p>
            <div className="d-flex justify-content-start my-4">
              <a
                className="fas fa-envelope fa-lg mx-2"
                style={{ color: "#55acee" }}
                href={`mailto:aiclub@nitc.ac.in`}
              ></a>
              <a
                className="fab fa-linkedin-in fa-lg mx-2"
                style={{ color: "#3b5998" }}
                href="https://in.linkedin.com/company/ai-club-nitc"
                target="_blank"
              ></a>
              <a
                className="fab fa-github fa-lg mx-2"
                style={{ color: "#333333" }}
                href="https://github.com/AI-Club-at-NITC"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="row text-centre">
          <div className="col-xs-12">
            <hr />
            Copyright © 2023 NitCsell. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
