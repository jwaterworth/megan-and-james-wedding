import React from "react";

export default function Location() {
  return (
    <div className="section-dark location" id="location">
      <div className="container">
        <div
          className="columns is-multiline"
          data-aos="fade-in"
          data-aos-easing="linear"
        >
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">
              View My location
            </h1>
          </div>
          <div className="column is-10 has-text-centered is-offset-1">
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et doloremagna aliqua
            </h2>
            <form action="example.docs">
              <button className="button">
                Download location 
                <i className="fad fa-download fa-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
