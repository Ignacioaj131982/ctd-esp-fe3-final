import { useState } from "react";
import "../Styles/styles.css"; 

const Form = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name.length <= 5 || !validateEmail(email) || message.trim() === "") {
      setError("Por favor verifique su información nuevamente");
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail.`);
      console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
    
      localStorage.setItem("contactForm", JSON.stringify(formData));

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Contacto</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Motivo del contacto:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe el motivo de tu contacto"
            className="form-textarea"
          />
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
      {error && <p className="form-error">{error}</p>}
      {successMessage && <p className="form-success">{successMessage}</p>}
    </div>
  );
};

export default Form;