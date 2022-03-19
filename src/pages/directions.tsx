import React from "react";

export default function Directions() {
  return (
    <div className="section-dark location" id="directions">
      <div className="container">
        <div
          className="columns is-multiline"
          data-aos="fade-in"
          data-aos-easing="linear"
        >
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">
              Directions
            </h1>
          </div>
          <div className="column is-10 has-text-centered is-offset-1">
            <h2 className="subtitle">
              Sandford St Martin is situated between Banbury and Oxford. The
              church is located in the middle of the village (OX7 7AH)
            </h2>
            <ul>
              <li>
                Please avoid parking on the pavement around the church, there
                will be a signposted car park with plenty of space in the field
                next door.{" "}
              </li>
              <li>
                The reception will be in a teepee at Sandford St Martin Cricket
                Club. This is a five minute walk up the road from the church.
              </li>

              <li>There is limited parking available at the cricket club.</li>
              <li>
                PLEASE NOTE: there is likely to be a cricket match in the
                afternoon/early evening.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
