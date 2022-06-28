import React, { useState } from "react";
import "../styles/showcase.scss";

import TipiImg from "../images/tipi.svg";
import JamesMeganImg from "../images/james-megan.jpg";
import MoonImg from "../images/moon.png";
import StarImg from "../images/star.svg";

export default function Hero() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-seventy-thirty-height">
        <nav className="navbar is-transparent is-hidden-desktop">
          <div className="navbar-brand">
            <div
              className="navbar-burger burger"
              data-target="mobile-nav"
              onClick={() => handleMobileNavClick()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="mobile-nav"
            className={`navbar-menu ${mobileNavOpen ? "is-active" : ""}`}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <a className="navbar-item" href="#ceremony">
                  Ceremony
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#party">
                  Party
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#directions">
                  Directions
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#accommodation">
                  Accommodation
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#taxis">
                  Taxis
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#gifts">
                  Gifts
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#about">
                  About Us
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#faq">
                  FAQ
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <img id="moon" src={MoonImg}></img>
        <img id="star" src={StarImg}></img>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title">Megan & James Wedding</h2>
            <h1 className="subtitle profession">20/08/2022</h1>
          </div>
        </div>
        <img id="tipi" src={TipiImg}></img>
        <div className="hero-foot ">
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <a href="#ceremony">Ceremony</a>
                  </li>
                  <li>
                    <a href="#party">Party</a>
                  </li>
                  <li>
                    <a href="#accommodation">Accommodation</a>
                  </li>
                  <li>
                    <a href="#taxis">Taxis</a>
                  </li>
                  <li>
                    <a href="#gifts">Gifts</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
