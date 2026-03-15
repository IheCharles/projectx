function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mvzwryno"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">
              Country / Location <span className="required">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="e.g. United States"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your requirements — quantities, timeline, questions…"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-lg btn-submit">
            Send Message
          </button>
          <p
            className="form-note"
            style={{ fontWeight: "bold", color: "#c00", fontSize: "1.1em" }}
          >
            Please check your spam/junk folder if you don't receive a reply.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
