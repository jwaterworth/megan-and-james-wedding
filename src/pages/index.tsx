import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/showcase.scss";
import AOS from "aos";
import Hero from "./hero";
import Plan from "./plan";
import Location from "./location";
import Accommodation from "./accommodation";
import RSVP from "./rsvp";
import FAQ from "./faq";
import Contact from "./contact";
import Footer from "./footer";

export default function IndexPage() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  let aosInit = false;

  useEffect(() => {
    if (!aosInit) {
      AOS.init({
        easing: "ease-out",
        duration: 800,
      });
    } else {
      AOS.refresh();
    }
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>{site.siteMetadata.title}</title>
        <link rel="canonical" href={site.siteMetadata.url} />
      </Helmet>
      {/* Bulma Version 0.9.0*/}
      {/* Begin Preloader */}
      {/* <div className="aer-wrapper">
        <div className="preloader">
          <img src="img/preloader.gif" alt="" />
        </div>
      </div> */}
      {/* End Preloader*/}
      {/* Begin Scroll Up Button */}
      <form action="#home">
        <button id="toTop" title="Go to top">
          <i className="fas fa-angle-up" />
        </button>
      </form>
      {/* End Scroll Up Button */}
      <Hero />
      <div className="main-content">
        <Plan />
        <Location />
        <Accommodation />
        <RSVP />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
