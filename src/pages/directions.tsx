import React from "react";

export default function Directions() {
  return (
    <div className="section-color location" id="directions">
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
            <p>
              Please avoid parking on the pavement around the church, there will
              be a signposted car park with plenty of space in the field next
              door.
            </p>
            <br />
            <p>
              The reception will be in a teepee at Sandford St Martin Cricket
              Club. This is a five minute walk up the road from the church.
            </p>
            <br />
            <p>There is limited parking available at the cricket club.</p>
            <br />
            <p>
              PLEASE NOTE: there is likely to be a cricket match in the
              afternoon/early evening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
