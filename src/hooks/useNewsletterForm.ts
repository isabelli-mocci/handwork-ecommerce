import { useState } from 'react';

export function useNewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    setSubmitted(true);
    setEmail('');
  };

  return {
    email,
    setEmail,
    submitted,
    error,
    handleChange,
    handleSubmit,
  };
}
