import React from "react";

export default function Taxis() {
  return (
    <div className="section-dark skills" id="taxis">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">Taxis</h1>
          </div>
          <div
            className="column is-4 has-text-centered"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <p>
              <a target="_blank" href="https://excelsiortaxis.co.uk/">
                Excelsior Taxis
              </a>
            </p>
            <p>Tel: 01608 643721</p>
          </div>
          <div
            className="column is-4 has-text-centered"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <p>
              <a target="_blank" href="https://www.a1taxischippingnorton.uk/">
                A1 Taxis Chipping Norton
              </a>
            </p>
            <p>Tel: 07528 133960</p>
          </div>
          <div
            className="column is-4 has-text-centered"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <p>
              <a target="_blank" href="http://blenheimtaxis.com/">
                Blenheim Taxis
              </a>
            </p>
            <p>Tel: 07773 000 444</p>
          </div>
        </div>
      </div>
    </div>
  );
}
