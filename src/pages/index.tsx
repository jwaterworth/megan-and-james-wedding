import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
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
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{site.siteMetadata.title}</title>
        <link rel="canonical" href={site.siteMetadata.url} />
      </Helmet>
      <h1 style={{ margin: "auto", width: "fit-content" }}>
        Megan & James Wedding
      </h1>
      <h2 style={{ margin: "auto", width: "fit-content" }}>20/08/22</h2>
    </div>
  );
}
