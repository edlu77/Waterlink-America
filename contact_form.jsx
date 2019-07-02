import React from 'react';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      designation: "",
      company: "",
      address: "",
      message: "",
    }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleDesignation = this.handleDesignation.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleAddress= this.handleAddress.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  handleDesignation(e) {
    this.setState({
      designation: e.target.value
    })
  }
  handleCompany(e) {
    this.setState({
      company: e.target.value
    })
  }
  handleAddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  handleMessage(e) {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.designation === "" || this.state.company === "" || this.state.address === "" || this.state.message === "") {
      return
    } else {
      this.setState({
        name: "",
        email: "",
        designation: "",
        company: "",
        address: "",
        message: "",
      })
    }
  }

  render() {
    return (
      <form className="contact-form">
        <h1>Contact Form</h1>
        <input
          className="contact-input"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleName}/>
        <input
          className="contact-input"
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmail}/>
        <input
          className="contact-input"
          type="text"
          placeholder="Designation"
          value={this.state.designation}
          onChange={this.handleDesignation}/>
        <input
          className="contact-input"
          type="text"
          placeholder="Company"
          value={this.state.company}
          onChange={this.handleCompany}/>
        <input
          className="contact-input"
          type="text"
          placeholder="Full address (City, State/Province, Country)"
          value={this.state.address}
          onChange={this.handleAddress}/>
        <input
          className="contact-input"
          id="message-box"
          type="textarea"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleMessage}/>
        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  };
};

export default ContactForm;
