import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyyovlkz");
  if (state.succeeded) {
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
              <h2>Thanks! We'll get back to you as soon as we can!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
            <form onSubmit={handleSubmit}>
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
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    name="message"
                    defaultValue={""}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control ">
                  <button
                    type="submit"
                    className="button submit-button"
                    disabled={state.submitting}
                  >
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
