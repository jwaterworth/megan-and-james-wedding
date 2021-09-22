import React from "react";

export default function Contact() {
  return (
    <div className="section-light contact" id="contact">
      <div className="container">
        <div
          className="columns is-multiline"
          data-aos="fade-in-up"
          data-aos-easing="linear"
        >
          <div className="column is-12 plan">
            <h1 className="title has-text-centered section-title">
              Get in touch
            </h1>
          </div>
          <div className="column is-8 is-offset-2">
            <form action="https://formspree.io/email@example.com" method="POST">
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex. Jane Smith"
                    name="Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    placeholder="Ex. hello@arctheme.com"
                    name="Email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    name="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control ">
                  <button className="button submit-button">
                    Submit&nbsp;&nbsp;
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
