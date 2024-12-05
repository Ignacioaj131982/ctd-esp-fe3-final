import ContactForm from '../Components/Contact';
import '../Styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions or concerns!</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
