import React from "react";

export default function FAQ() {
  return (
    <div className="section-dark my-work" id="my-work">
      <div className="container">
        <div
          className="columns is-multiline"
          data-aos="fade-in"
          data-aos-easing="linear"
        >
          <div className="column is-12">
            <h1 className="title has-text-centered section-title">My Work</h1>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=0")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=10")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=20")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=30")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=40")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=50")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=60")',
                }}
              />
            </a>
          </div>
          <div className="column is-3">
            <a href="#">
              <figure
                className="image is-2by1 work-item"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/320/180?image=70")',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
