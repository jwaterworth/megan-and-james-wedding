import React, { useState } from "react";
import "../styles/showcase.scss";

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
                <a className="navbar-item" href="#plan">
                  Plan
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#services">
                  Location
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#skills">
                  Accommodation
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#my-work">
                  RSVP
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#contact">
                  FAQs
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
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title">Megan & James Wedding</h2>
            <h1 className="subtitle profession">20/08/2022</h1>
          </div>
        </div>
        <div className="hero-foot ">
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <a href="#plan">Plan</a>
                  </li>
                  <li>
                    <a href="#location">Location</a>
                  </li>
                  <li>
                    <a href="#accomodation">Accomodation</a>
                  </li>
                  <li>
                    <a href="#rsvp">RSVP</a>
                  </li>
                  <li>
                    <a href="#faq">FAQs</a>
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
