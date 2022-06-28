import React, { useEffect } from "react";

export default function Accommodation() {
  let aosInit = false;

  return (
    <div className="section-light accommodation" id="accommodation">
      <div className="container">
        <div
          className="columns is-multiline"
          data-aos="fade-in"
          data-aos-easing="linear"
        >
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">
              Accommodation
            </h1>
          </div>
          <div className="column is-10 has-text-centered is-offset-1">
            <h2 className="subtitle">Local</h2>
            <ul>
              <li>Hopcrofts Holt Hotel</li>
              <li>Killingworth Castle Pub</li>
              <li>White Horse Inn, Duns Tew</li>
              <li>Deddington Arms Hotel</li>
              <li>Duke of Marlborough</li>
              <li>Heythrop Park</li>
              <li>The Falkland Arms</li>
            </ul>
          </div>
          <div className="column is-10 has-text-centered is-offset-1">
            <h2 className="subtitle">Further afield</h2>
            <ul>
              <li>Chipping Norton Premier Inn</li>
              <li>The Kings Arms, Chipping Norton</li>
              <li>Bicester Premier Inn</li>
              <li>Travelodge M40, Bicester</li>
              <li>The Red Lion, Adderbury</li>
              <li>Banbury Town Centre Premier Inn</li>
              <li>Oxford Airport Premier Inn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
