export const CONTACT = {
  TITLE: 'Contact Us',
  SUBTITLE: 'We are here to help',
  DESCRIPTION: "If you'd like to get in contact, please fill in the form below or send us an email to hello@mocciandco.com. We would love to hear from you!",
  SUCCESS_MESSAGE: 'Message sent successfully!',
  ERROR_REQUIRED: 'Name, Email and Comment are required.'
};

export const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};

export type FormFields = typeof INITIAL_FORM;
