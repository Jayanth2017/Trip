import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h2>Send a message to us!</h2>
      <form>
        
        <input type="text" id="name" name="name" placeholder="your name..." required />

        
        <input type="email" id="email" name="email" placeholder="your e-mail..." required />

        <input type="text" id="subject" name="subject" placeholder="Subject..." required />
        
        <textarea id="message" name="message" required placeholder="Message...."></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default ContactForm;
// This code defines a React functional component named ContactForm.