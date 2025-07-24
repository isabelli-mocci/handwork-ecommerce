import { useState } from 'react';
import type { ChangeEvent, FormEvent, FC } from 'react';

const CONTACT = {
  TITLE: 'Contact Us',
  SUBTITLE: 'We are here to help',
  DESCRIPTION: "If you'd like to get in contact, please fill in the form below or send us an email to hello@mocciandco.com. We would love to hear from you!",
  SUCCESS_MESSAGE: 'Message sent successfully!',
  ERROR_REQUIRED: 'Name, Email and Comment are required.'
};

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};

type FormFields = typeof INITIAL_FORM;

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateForm = (form: FormFields): string | null => {
  if (!form.name.trim() || !form.email.trim() || !form.comment.trim()) {
    return CONTACT.ERROR_REQUIRED;
  }
  if (!validateEmail(form.email)) {
    return 'Please enter a valid email address.';
  }
  return null;
};

interface InputProps {
  id: string;
  name: keyof FormFields;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

const INPUT_CLASS =
  "mt-1 block w-full px-4 py-3 bg-background border border-primary/50 rounded-sm shadow-sm placeholder-text/70 focus:outline-none focus:border-primary transition-colors";

const TextInput: FC<InputProps> = ({ id, name, type = 'text', placeholder, value, onChange, required }) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={INPUT_CLASS}
    required={required}
    aria-required={required}
    autoComplete={name}
  />
);

interface TextAreaProps extends Omit<InputProps, 'type'> {
  rows?: number;
}

const TextArea: FC<TextAreaProps> = ({ id, name, placeholder, value, onChange, required, rows = 6 }) => (
  <textarea
    id={id}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={INPUT_CLASS + ' resize-y'}
    required={required}
    aria-required={required}
    rows={rows}
  />
);

const ContactUsPage: FC = () => {
  const [form, setForm] = useState<FormFields>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateForm(form);
    if (validationError) {
      setError(validationError);
      setSuccess(null);
      return;
    }
    setForm(INITIAL_FORM);
    setError(null);
    setSuccess(CONTACT.SUCCESS_MESSAGE);
  };

  return (
    <main className="flex justify-center">
      <section className="p-6 sm:p-8 lg:p-10 max-w-2xl w-full">
        <h1 className="font-cardo text-3xl font-black sm:text-3xl mb-8 uppercase">{CONTACT.TITLE}</h1>
        <div className="mb-10">
          <h2 className="text-md sm:text-xl font-normal mb-4">{CONTACT.SUBTITLE}</h2>
          <p className="text-sm md:text-base lg:text-lg font-light mb-2 text-justify">{CONTACT.DESCRIPTION}</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextInput
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <TextInput
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextArea
              id="comment"
              name="comment"
              placeholder="Comment"
              value={form.comment}
              onChange={handleChange}
              required
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm font-medium">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-sm font-medium">{success}</div>
          )}
          <div>
            <button
              type="submit"
              className="w-auto px-8 py-3 bg-primary text-white font-medium rounded-sm shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-base"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactUsPage;
