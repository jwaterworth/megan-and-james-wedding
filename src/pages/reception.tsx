import React from "react";
import "../styles/showcase.scss";
import ChurchImg from "../images/church-st-martin.jpeg";

export default function Reception() {
  return (
    <div className="section-light plan" id="reception">
      <div className="container">
        <div className="column is-12 plan">
          <h1 className="title has-text-centered section-title">Reception</h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p className="is-larger">
              <strong>
                A wedding breakfast will follow up at the cricket club at 15.00
                and an evening reception at 18.30.
              </strong>
            </p>
            <br />
            <p>Evening food will be served around 21.00.</p>
            <br />
            <p>
              Carriages at 0.00. The reception will be on grass so please choose
              your footwear accordingly.
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
