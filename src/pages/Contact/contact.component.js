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

  onChangeHandler(e) {
    // deconstruction of the contactForm
    // const updatedContactForm = { firstName: firstName, email: email, comment: comment };
    const updatedContactForm = { ...this.state.contactForm };

    updatedContactForm[e.target.name] = e.target.value;

    this.setState({ contactForm: updatedContactForm });
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="formControl">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={this.state.contactForm.firstName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </label>
          </div>
          <div className="formControl">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={this.state.contactForm.email}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </label>
          </div>
          <div className="formControl">
            <label>
              Comment
              <textarea
                name="comment"
                value={this.state.contactForm.comment}
                onChange={(e) => this.onChangeHandler(e)}
              ></textarea>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
