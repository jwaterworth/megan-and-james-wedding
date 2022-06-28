import React, { useState } from "react";
import "../styles/showcase.scss";

import JamesMeganImg from "../images/james-megan.jpg";

export default function MeganJames() {
  return (
    <div className="section-light plan" id="about">
      <div className="container">
        <div className="column is-12 plan">
          <h1 className="title has-text-centered section-title">About Us</h1>
        </div>
        <div className="columns is-multiline">
          <div className="column is-6 " data-aos="fade-left">
            <img className="is-rounded custom-img" src={JamesMeganImg} alt="" />
          </div>
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p>
              We first met at Loughborough University and became a couple in
              2011.
            </p>
            <br />
            <p>
              We moved in together in 2014 and then bought a house in Newark in
              2018.
            </p>
            <br />
            <p>We finally got engaged during lockdown at Christmas 2020!!</p>
            <br />
            <p>
              We're really looking forward to having a great big party to
              celebrate with our friends and family!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
