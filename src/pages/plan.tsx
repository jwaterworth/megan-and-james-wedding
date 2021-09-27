import React from "react";
import "../styles/showcase.scss";

export default function Plan() {
  return (
    <div className="section-light plan" id="plan">
      <div className="container">
        <div className="column is-12 plan">
          <h1 className="title has-text-centered section-title">
            Plan for the day
          </h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p className="is-larger">
              <strong>
                Showcase is a modern, beautiful personal website template to
                showcase who you are, as well as projects you've worked on in
                the past.
              </strong>
            </p>
            <br />
            <p>
              Showcase was built from the ground up with Bulma to be fast and
              responsive out of the box with all source files well documented
              for easy to customization. The Showcase template gives you a
              personal space to share what you are all about as a creative
              designer, developer, photographer, and more!
            </p>
            <br />
            <div className="is-divider" />
            <div className="columns about-links">
              <div className="column">
                <p className="heading">
                  <strong>Give me a ring</strong>
                </p>
                <p className="subheading">123-456-7890</p>
              </div>
              <div className="column">
                <p className="heading">
                  <strong>Email Me</strong>
                </p>
                <p className="subheading">hello@example.com</p>
              </div>
              <div className="column">
                <p className="heading">
                  <strong>View my portfolio</strong>
                </p>
                <p className="subheading">example.com</p>
              </div>
            </div>
          </div>
          <div className="column is-6 right-image " data-aos="fade-left">
            <img
              className="is-rounded"
              src="https://picsum.photos/id/366/600/375"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
