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
    if (this.state.name === "" || this.state.email === "" || this.state.designation === "" || this.state.company === "" || this.state.address === "" || this.state.message === "") {
      return
    } else {
      setTimeout(() => {
        this.setState({
        name: "",
        email: "",
        designation: "",
        company: "",
        address: "",
        message: "",
      })}, 1)
    }
  }

  render() {
    let body = `Name: ${this.state.name}%0D%0A%0D%0AEmail: ${this.state.email}%0D%0A%0D%0ADesignation: ${this.state.designation}%0D%0A%0D%0ACompany: ${this.state.company}%0D%0A%0D%0AAddress: ${this.state.address}%0D%0A%0D%0A${this.state.message}`
    let email = `mailto:eddd.lu@gmail.com?subject=Information Request&body=${body}`;
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
        <textarea
          className="contact-input"
          id="message-box"
          type="textarea"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleMessage}/>
        <a className="submit-button" onClick={this.handleSubmit} href={email}>Submit</a>
      </form>
    )
  };
};

export default ContactForm;

// <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
