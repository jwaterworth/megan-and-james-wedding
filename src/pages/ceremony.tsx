import React from "react";
import "../styles/showcase.scss";
import ChurchImg from "../images/church-st-martin.jpeg";

export default function Ceremony() {
  return (
    <div className="section-dark plan" id="ceremony">
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
              <strong>The Ceremony will start at 13.30.</strong>
            </p>
            <br />
            <p>Please arrive by 13.00 to avoid a late entrance!</p>
            <br />
            <p className="is-larger">
              <strong>
                A wedding breakfast will follow up at the cricket club at 15.00
                and an evening reception at 18.30.
              </strong>
            </p>
            <br />
            <p>
              Evening food will be served around 21.00. Carriages at 0.00. The
              reception will be on grass so please choose your footwear
              accordingly.
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
