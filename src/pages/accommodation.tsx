import React, { useEffect } from "react";

export default function Accommodation() {
  let aosInit = false;

  return (
    <div className="section-color accommodation" id="accommodation">
      <div className="container">
        <div className="columns is-multiline">
          <div
            className="column is-12 location"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <h1 className="title has-text-centered section-title">Services</h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h2>
            <br />
          </div>
          <div className="columns is-12">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fad fa-meteor fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-paint-brush fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-rocket fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
          </div>
          <hr />
          <div className="columns is-12">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-upload fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-bus fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
