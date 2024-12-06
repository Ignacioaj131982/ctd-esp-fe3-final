import { useState } from 'react';
import '../Styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length <= 5) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    if (formData.message.trim().length === 0) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    console.log('Saved data:', formData);
    setSuccessMessage(
      `Gracias ${formData.name}, te contactaremos cuando antes vía mail`
    );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions, feedback, or need assistance, feel free to reach out to us.
      </p>
      {successMessage ? (
        <p className="success-message">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
