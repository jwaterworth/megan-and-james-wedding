import React from "react";
import "../styles/showcase.scss";
import ChurchImg from "../images/church-st-martin.jpeg";

export default function Ceremony() {
  return (
    <div className="section-light plan" id="ceremony">
      <div className="container">
        <div className="column is-12 plan">
          <h1 className="title has-text-centered section-title">Ceremony</h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p className="is-larger">
              For day guests, the ceremony will start at <strong>13.30.</strong>{" "}
              Please arrive by <strong>13.00</strong> to avoid a late entrance!
            </p>
            <br />
            <p className="is-larger">
              The wedding breakfast will follow up at the cricket club at{" "}
              <strong>15.00</strong>.
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
