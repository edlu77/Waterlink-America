import React from 'react';

const App = () => {
  return (
    <body>
      <header class="header">
        <div class="header-top">
          <a href="index.html">
          <img class="header-logo" src="assets/images/waterlink.png"></img>
          </a>
          <img class="header-pic" src="assets/images/cargo-ship.jpg"></img>
        </div>

        <nav class="header-nav">
          <ul class="header-list">
            <li><a class="active" href="index.html">About</a></li>
            <li><a href="services.htm">Services</a></li>
            <li><a href="contact.htm">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div>Waterlink America, a major player in the new order of global transportation, has for over a decade strengthened our position as the leading transportation specialist to and from the Far East. Now with market and trade requirements changing rapidly, we have affluently continued to expand into further trade routes. Globally, Waterlink is everywhere, leading the Transportation Industry through the sheer power of reliability and quality assurance.</div>
        <div>We strive to combine the raw basics of international trade to supply you with a formidable tool in today’s competitive marketplace. No longer is freight logistics a problem to delay or complicate your day to day business, as our infrastructure throughout the world essentially eliminates your concern, continuously providing assurance of expedient and competitive delivery. With the best network of warehousing, distribution, on-carriage and customs agents, we effectively service every aspect of international freight forwarding. Our competent logistics department is available upon demand for creating tough problem solving strategies.</div>
      </main>
    </body>
  );
};

export default App;
