import React from "react";

export default function RSVP() {
  return (
    <div className="section-light skills" id="skills">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">Skills</h1>
          </div>
          <div
            className="column is-6"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <h1>Adobe Experience Design</h1>
            <progress className="progress" value={70} max={100}>
              30%
            </progress>
            <h1>Adobe After Effects</h1>
            <progress className="progress" value={65} max={100}>
              30%
            </progress>
            <h1>Visual Studio Code</h1>
            <progress className="progress" value={58} max={100}>
              45%
            </progress>
            <h1>Sketch</h1>
            <progress className="progress" value={90} max={100}>
              60%
            </progress>
          </div>
          <div
            className="column is-6"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <h1>HTML</h1>
            <progress className="progress" value={85} max={100}>
              30%
            </progress>
            <h1>CSS</h1>
            <progress className="progress" value={95} max={100}>
              30%
            </progress>
            <h1>VueJS</h1>
            <progress className="progress" value={70} max={100}>
              45%
            </progress>
            <h1>React</h1>
            <progress className="progress" value={60} max={100}>
              60%
            </progress>
          </div>
        </div>
      </div>
    </div>
  );
}
