import React from "react";

export default function FAQ() {
  return (
    <div className="section-dark my-work" id="faq">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">FAQ</h1>
            <div className="content">
              <dl>
                <dt className="has-text-weight-bold">
                  How can I donate to British Heart Foundation?
                </dt>
                <dd>
                  We've set up a donation page{" "}
                  <a
                    target="_blank"
                    href="https://celebration.bhf.org.uk/Celebration/Megan-and-James-Wedding"
                  >
                    here.
                  </a>{" "}
                  Thank you!
                </dd>
                <br />
                <dt className="has-text-weight-bold">What about the bar?!</dt>
                <dd>
                  We are providing a limited bar before 6:30pm which will offer
                  gin & tonics, ale, lager and soft drinks, there also will be
                  wine on the table of course!
                  <br />
                  From 6:30pm, the cricket club will host a cash bar (card
                  accepted) which offer all sorts of drinks.
                </dd>
                <br />
                <dt className="has-text-weight-bold">
                  I'm bringing children, do I need to bring a high chair?
                </dt>
                <dd>
                  We're afraid we only have access to normal chairs and tables.
                  Some parents are bringing high chairs or special chairs that
                  clip on to the table.
                </dd>
                <br />
                <dt className="has-text-weight-bold">
                  What's the deal with parking?
                </dt>
                <dd>
                  Parking is available next to the church. You're welcome to
                  move cars up to the cricket club afterwards but{" "}
                  <strong>please be aware</strong> there will be a cricket match
                  on and you may need to wait for the over to end before making
                  your way around the pitch.
                </dd>
                <br />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
