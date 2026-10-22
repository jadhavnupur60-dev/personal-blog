
function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! This is a demo contact form.");
    event.target.reset();
  }

  return (
    <section className="page">
      <h1>Contact Me</h1>
      <p>Email: jadhavnupur60@gmail.com</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="4" required />

        <button className="btn" type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
