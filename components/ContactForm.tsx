"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/content/profile";

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emptyFields: ContactFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);

  function updateField(name: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = fields.subject.trim() || "Website contact";
    const body = [
      fields.message.trim(),
      "",
      `From: ${fields.name.trim() || "Not provided"}`,
      `Reply-To: ${fields.email.trim() || "Not provided"}`,
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="contact-name">name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-email">email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-subject">subject</label>
        <input
          id="contact-subject"
          name="subject"
          value={fields.subject}
          onChange={(event) => updateField("subject", event.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-message">message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={8}
          required
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </div>

      <button type="submit">send email</button>
    </form>
  );
}
