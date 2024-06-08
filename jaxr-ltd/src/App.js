import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faShieldAlt, faCloud, faCogs, faCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section id="about" title="About Us">
        <p>Our Mission: To deliver reliable, innovative, and cost-effective IT solutions that empower businesses to achieve their full potential.</p>
        <p>Our Vision: To be a global leader in IT services, known for our commitment to quality, customer satisfaction, and technological excellence.</p>
        <p>Our Values: Integrity, Customer Commitment, Quality.</p>
      </Section>
      <Section id="services" title="Our Services" className="bg-light">
        <div className="services-grid">
          <Service icon={faBriefcase} title="IT Consulting" description="Our expert consultants provide strategic guidance to help you navigate the complex IT landscape." />
          <Service icon={faShieldAlt} title="Cybersecurity" description="Protect your business from cyber threats with our comprehensive cybersecurity solutions." />
          <Service icon={faCloud} title="Cloud Solutions" description="Harness the power of the cloud with our scalable and secure cloud services." />
          <Service icon={faCogs} title="Managed IT Services" description="Focus on your core business while we manage your IT infrastructure with our proactive support and maintenance." />
          <Service icon={faCode} title="Software Development" description="Custom software solutions designed to meet your unique business requirements." />
          <Service icon={faNetworkWired} title="Network Solutions" description="Reliable and secure network infrastructure to ensure seamless connectivity and communication." />
        </div>
      </Section>
      <Section id="solutions" title="Solutions">
        <p>Industry-Specific Solutions, Small Business Solutions, Enterprise Solutions</p>
      </Section>
      <Section id="blog" title="Blog" className="bg-light">
        <p>Stay informed with the latest news, trends, and insights from the world of IT.</p>
      </Section>
      <ContactSection />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header>
    <div className="container">
      <h1>Jaxr Ltd</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-text">
        <h2>Welcome to Jaxr Ltd</h2>
        <p>Your Trusted Partner in IT Solutions</p>
        <a href="#about" className="button">Learn More</a>
      </div>
    </div>
  </section>
);

const Section = ({ id, title, children, className }) => (
  <section id={id} className={`section ${className}`}>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

const Service = ({ icon, title, description }) => (
  <div className="service">
    <FontAwesomeIcon icon={icon} size="2x" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    alert('Thank you for your message. We will get back to you shortly.');

    event.target.reset();
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  return (
    <Section id="contact" title="Contact">
      <p>Email: info@jaxrltd.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 1234 IT Park, Silicon Valley, CA</p>
      <form onSubmit={handleSubmit} id="contactForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </Section>
  );
};

const Footer = () => (
  <footer>
    <div className="container">
      <p>© 2024 Jaxr Ltd. All rights reserved.</p>
      <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a> | <a href="#sitemap">Sitemap</a></p>
    </div>
  </footer>
);

export default App;
