import React from "react";
import "../styles/showcase.scss";
import ChurchImg from "../images/sandford_cricket_club.jpeg";

export default function Reception() {
  return (
    <div className="section-dark plan" id="party">
      <div className="container">
        <div className="column is-12 plan">
          <h1 className="title has-text-centered section-title">Party</h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p className="is-larger">
              For all guests, the party will start at <strong>18.30</strong> at
              the cricket club.
            </p>
            <br />
            <p>
              Evening food will be served around <strong>21.00.</strong>
            </p>
            <br />
            <p>
              The reception will be on grass so please choose your footwear
              accordingly.
            </p>
            <br />
            <p>
              Carriages at <strong>0.00.</strong>
            </p>
          </div>
          <div className="column is-6 right-image " data-aos="fade-left">
            <img className="is-rounded" src={ChurchImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
