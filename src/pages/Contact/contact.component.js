import React from "react";

import "./contact.component.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactForm: {
        firstName: "",
        email: "",
        comment: "",
      },
    };
  }

  checkValidity(value, rules) {}

  onChangeHandler(e) {
    // deconstruction of the contactForm
    // const updatedContactForm = { firstName: firstName, email: email, comment: comment };
    const updatedContactForm = { ...this.state.contactForm };

    updatedContactForm[e.target.name] = e.target.value;

    this.setState({ contactForm: updatedContactForm });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="formControl">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.contactForm.firstName}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </div>
          <div className="formControl">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.contactForm.email}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </div>
          <div className="formControl">
            <label>Comment</label>
            <textarea
              name="comment"
              value={this.state.contactForm.comment}
              onChange={(e) => this.onChangeHandler(e)}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
