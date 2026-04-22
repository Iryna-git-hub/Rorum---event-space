export function ContactForm() {
  return (
    <form className="contact-form">
      <label>
        <span>Name</span>
        <input type="text" placeholder="Your name" />
      </label>

      <label>
        <span>Email</span>
        <input type="email" placeholder="name@email.com" />
      </label>

      <label>
        <span>Message</span>
        <textarea
          rows={7}
          placeholder="Tell us a little about your idea, dates, or collaboration."
        />
      </label>

      <label className="checkbox-row">
        <input type="checkbox" />
        <span>I agree to receive a response from the RORUM team.</span>
      </label>

      <button className="solid-button" type="submit">
        Submit
      </button>
    </form>
  );
}
