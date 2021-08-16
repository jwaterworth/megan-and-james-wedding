import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../styles/mystyles.scss";
import { Helmet } from "react-helmet";

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
  // return (
  //   <div className="container">
  //     <Helmet>
  //       <meta charSet="utf-8" />
  //       <title>{site.siteMetadata.title}</title>
  //       <link rel="canonical" href={site.siteMetadata.url} />
  //     </Helmet>
  //     <h1 style={{ margin: "auto", width: "fit-content" }}>
  //       Megan & James Wedding
  //     </h1>
  //     <h2 style={{ margin: "auto", width: "fit-content" }}>20/08/22</h2>
  //   </div>
  // );
  return (
    <div className="container has-background-primary">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>{site.siteMetadata.title}</title>
        <link rel="canonical" href={site.siteMetadata.url} />
      </Helmet>
      <section className="hero is-medium is-info">
        <div className="hero-body">
          <p className="title">Photo here</p>
          <p className="subtitle">Find a photo..</p>
        </div>
      </section>
      <section className="hero is-primary">
        <div className="container">
          <div className="hero-body">
            <p className="title">Megan & James Wedding</p>
            <p className="subtitle">20/08/22</p>
          </div>
        </div>
      </section>
      <section>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {/* <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a> */}

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  {/* <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider">
          <a className="navbar-item">
            Report an issue
          </a> */}
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
