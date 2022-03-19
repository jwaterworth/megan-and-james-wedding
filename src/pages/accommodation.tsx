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
            <h1 className="title has-text-centered section-title">
              Accommodation
            </h1>
            <h2 className="subtitle">Local</h2>
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
              <h2>Hopcrofts Holt Hotel - £80- £150</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-paint-brush fa-3x" />
              <hr />
              <h2>Killingworth Castle Pub - £150 to £180</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-rocket fa-3x" />
              <hr />
              <h2>White Horse Inn, Duns Tew - £135 to £165</h2>
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
              <h2>Deddington Arms Hotel - £130</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-bus fa-3x" />
              <hr />
              <h2>Duke of Marlborough - £120</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Heythrop Park</h2>
            </div>
          </div>
          <hr />
          <div className="columns is-12">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>The Falkland Arms - £133</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Chipping Norton Premier Inn Chipping Norton - £100</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>The Kings Arms Chipping Norton - £63 to £90</h2>
            </div>
          </div>
          <hr />
          <div className="columns is-12">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Bicester Premier Inn Bicester - £110</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Travelodge M40 Bicester - £45</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Banbury The Red Lion, Adderbury - £108</h2>
            </div>
          </div>
          <hr />
          <div className="columns is-8">
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Banbury Town Centre Premier Inn - £ 31.50</h2>
            </div>
            <div
              className="column is-4 has-text-centered"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <i className="fas fa-code fa-3x" />
              <hr />
              <h2>Oxford Premier Inn Oxford Airport - £56.50 - £102</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
