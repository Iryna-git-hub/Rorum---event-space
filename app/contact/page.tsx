"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  fullName: string;
  contact: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  contact: "",
  phone: "",
  email: "",
  message: "",
};

function MailIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.contact.trim()) errors.contact = "Please tell us what you are contacting us about.";
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";

  return errors;
}

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  return (
    <main className="page-shell contact-us-page">
      <section className="contact-us-hero">
        <div className="container">
          <span className="eyebrow plain-eyebrow">Contact us</span>
          <h1>Let&apos;s plan your next event at RORUM.</h1>
          <p>
            Tell us what you are planning, ask a question, or share the first
            version of your idea. We will help you find the right next step.
          </p>
        </div>
      </section>

      <section className="contact-us-main">
        <div className="container contact-us-layout">
          <form className="contact-us-form" onSubmit={handleSubmit} noValidate>
            <div>
              <span className="eyebrow plain-eyebrow">Send a message</span>
              <h2>We usually reply within a few business days.</h2>
            </div>

            {submitted ? (
              <div className="form-success" role="status">
                Thank you. Your message has been received, and we will get back
                to you soon.
              </div>
            ) : null}

            <label>
              <span>Full name</span>
              <input
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                aria-invalid={Boolean(errors.fullName)}
                autoComplete="name"
                name="fullName"
                onBlur={() => setErrors(validate(values))}
                onChange={(event) => updateField("fullName", event.target.value)}
                placeholder="Your full name"
                type="text"
                value={values.fullName}
              />
              {errors.fullName ? <small id="fullName-error">{errors.fullName}</small> : null}
            </label>

            <label>
              <span>Contact</span>
              <input
                aria-describedby={errors.contact ? "contact-error" : undefined}
                aria-invalid={Boolean(errors.contact)}
                name="contact"
                onBlur={() => setErrors(validate(values))}
                onChange={(event) => updateField("contact", event.target.value)}
                placeholder="Event booking, collaboration, catering..."
                type="text"
                value={values.contact}
              />
              {errors.contact ? <small id="contact-error">{errors.contact}</small> : null}
            </label>

            <div className="contact-form-row">
              <label>
                <span>Phone</span>
                <input
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  aria-invalid={Boolean(errors.phone)}
                  autoComplete="tel"
                  name="phone"
                  onBlur={() => setErrors(validate(values))}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+45 00 00 00 00"
                  type="tel"
                  value={values.phone}
                />
                {errors.phone ? <small id="phone-error">{errors.phone}</small> : null}
              </label>

              <label>
                <span>Email</span>
                <input
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={Boolean(errors.email)}
                  autoComplete="email"
                  name="email"
                  onBlur={() => setErrors(validate(values))}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="hello@example.com"
                  type="email"
                  value={values.email}
                />
                {errors.email ? <small id="email-error">{errors.email}</small> : null}
              </label>
            </div>

            <label>
              <span>Message / description</span>
              <textarea
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={Boolean(errors.message)}
                name="message"
                onBlur={() => setErrors(validate(values))}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us about the event, guest count, preferred date, or what kind of support you need."
                rows={6}
                value={values.message}
              />
              {errors.message ? <small id="message-error">{errors.message}</small> : null}
            </label>

            <button className="solid-button" type="submit">
              Send
            </button>
          </form>

          <aside className="contact-us-info" aria-label="Contact information">
            <div className="contact-info-card">
              <MapPinIcon />
              <div>
                <h2>Address</h2>
                <p>Copenhagen, 14229</p>
              </div>
            </div>
            <div className="contact-info-card">
              <PhoneIcon />
              <div>
                <h2>Phone</h2>
                <p>+45 00 00 00 00</p>
              </div>
            </div>
            <div className="contact-info-card">
              <MailIcon />
              <div>
                <h2>Email</h2>
                <p>hello@example.com</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-heading">
            <span className="eyebrow plain-eyebrow">Find us</span>
            <h2>Our location</h2>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Google Map showing Copenhagen"
              src="https://www.google.com/maps?q=Copenhagen%2014229&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
