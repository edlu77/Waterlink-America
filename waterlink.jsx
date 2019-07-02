import React from 'react';
import ContactForm from './contact_form';

class Waterlink extends React.Component{

  render() {
    return (
      <content className="page-content">
        <nav className="nav">
          <div className="nav-container">
            <img id="logo" src="assets/images/waterlink.png"></img>
            <ul className="nav-list">
              <li><a href="#section1">ABOUT</a></li>
              <li><a href="#section2">SERVICES</a></li>
              <li><a href="#section3">CONTACT</a></li>
            </ul>
          </div>
        </nav>

        <section id="section1">
          <h1>ABOUT US</h1>
          <div className="section-content">
            <div className="section-text">
              <div>Waterlink America, a major player in the new order of global transportation, has for over a decade strengthened our position as the leading transportation specialist to and from the Far East. Now with market and trade requirements changing rapidly, we have affluently continued to expand into further trade routes. Globally, Waterlink is everywhere, leading the Transportation Industry through the sheer power of reliability and quality assurance.</div>
              <div>We strive to combine the raw basics of international trade to supply you with a formidable tool in today’s competitive marketplace. No longer is freight logistics a problem to delay or complicate your day to day business, as our infrastructure throughout the world essentially eliminates your concern, continuously providing assurance of expedient and competitive delivery. With the best network of warehousing, distribution, on-carriage and customs agents, we effectively service every aspect of international freight forwarding. Our competent logistics department is available upon demand for creating tough problem solving strategies.</div>
            </div>
          </div>
        </section>

        <section id="section2">
          <h1>OUR SERVICES</h1>
          <div className="section-content">
            <div className="section-text">
              <div>Waterlink America provides our customers reliable and cost-effective freight shipping solutions for cargo transportation and transport logistics services worldwide. Our standard transport logistics services include ground transportation, air freight, and ocean freight. We handle domestic United States traffic as well as international freight shipping.</div>
              <div>We are a dedicated team of highly trained freight shipping specialists, structured to provide our customers with a competitive edge.</div>
              <div>We built a solid infrastructure of global freight management to support international freight shipping that is focused on our core competency – versatility in accommodating each customer’s special handling and freight shipping requirements.</div>
              <div>No matter where or what time in the world, we are here to assist you in every aspect of your transport logistics service needs.</div>
            </div>
          </div>
        </section>

        <section id="section3">
          <h1>CONTACT</h1>
          <div className="section-content">
            <div className="contact-info">
              <div className="address">
                <div>Address:</div>
                <div>182-16 147th Ave, Suite 202</div>
                <div>Jamaica, NY 11413</div>
              </div>

              <div className="phone-fax">
                <div>Phone: (718) 995-2244</div>
                <div>Fax: (718) 995-2255</div>
                <div>Email: WaterlinkAmerica@aol.com</div>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />

        <footer id="footer">
          <img src="./assets/images/logo_white.png"></img>
          <div>COPYRIGHT 2019. ALL RIGHTS RESERVED</div>
        </footer>

      </content>
    )
  }
}

export default Waterlink;
