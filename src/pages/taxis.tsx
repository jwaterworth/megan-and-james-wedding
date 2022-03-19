import React from "react";

export default function Taxis() {
  return (
    <div className="section-light skills" id="taxis">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">Taxis</h1>
          </div>
          <div
            className="column is-4"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            Excelsior Taxi (has a retainer booking)
          </div>
          <div
            className="column is-4"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            A1 Taxis Chipping Norton
          </div>
          <div
            className="column is-4"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            Blenheim Taxis
          </div>
        </div>
      </div>
    </div>
  );
}
