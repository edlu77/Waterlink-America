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

  render() {
    console.log(this.state)
    return (
        <form className="contact-form">
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleName}/>
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleEmail}/>
          <input
            type="text"
            placeholder="designation"
            value={this.state.designation}
            onChange={this.handleDesignation}/>
          <input
            type="text"
            placeholder="company"
            value={this.state.company}
            onChange={this.handleCompany}/>
          <input
            type="text"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleAddress}/>
          <input
            type="text"
            placeholder="message"
            value={this.state.message}
            onChange={this.handleMessage}/>
        </form>

    )
  };

};

export default ContactForm;
