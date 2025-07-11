import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Contact.css";

const Contact = () => {
  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const subject = data.get("subject")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      setFormErrors("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrors("Invalid email address.");
      return;
    }

    setFormErrors(null);
    setSubmitting(true);

    const response = await fetch("https://formspree.io/f/xblynzbj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
    } else {
      setFormErrors("Failed to send. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="container my-5 py-5">
      <div className="row align-items-start">
        {/* LEFT SIDE */}
        <div className="col-lg-5 mb-4">
          <h2 className="text-danger fw-bold" style={{ fontSize: "3rem" }}>
            <Typewriter
              words={["Let's Talk!", "Send a Message"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </h2>

          <motion.p
            className="text-muted mt-3"
            style={{ fontSize: "1.3rem", lineHeight: "1.8" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Got an idea? Let’s build something great together. <br />
            Feel free to drop me a message 👋 Let’s get in touch!
          </motion.p>
        </div>

        {/* FORM SIDE */}
        <div className="col-lg-7">
          <form onSubmit={handleSubmit} className="row g-4 contact-glass-form shadow-lg p-4 rounded">
            {formErrors && (
              <div className="alert alert-danger fs-6">{formErrors}</div>
            )}
            <div className="col-md-6">
              <input type="text" name="name" className="form-control form-control-lg" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" name="email" className="form-control form-control-lg" placeholder="Your Email" required />
            </div>
            <div className="col-12">
              <input type="text" name="subject" className="form-control form-control-lg" placeholder="Subject" required />
            </div>
            <div className="col-12">
              <textarea name="message" className="form-control form-control-lg" rows={6} placeholder="Your Message" required></textarea>
            </div>
            <div className="col-12 text-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                type="submit"
                disabled={submitting}
                className="btn btn-danger btn-lg px-5"
              >
                {submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;