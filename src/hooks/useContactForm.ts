import { useState } from 'react';
import { CONTACT, INITIAL_FORM } from '../data/contactPage.data';
import type { FormFields } from '../data/contactPage.data';

export const useContactForm = () => {
  const [form, setForm] = useState<FormFields>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  return {
    form,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};
