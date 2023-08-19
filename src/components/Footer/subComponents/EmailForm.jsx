import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../../../css/EmailForm.css';

const EmailForm = ({isVisible}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_jboehkc', 'template_8h9a33j', e.target, 'QeZJWV4E4Bvm7v5Q-')
      .then(
        result => {
          console.log('Wiadomość wysłana!', result.text);
        },
        error => {
          console.error('Wystąpił błąd podczas wysyłania wiadomości:', error.text);
        }
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleName = e => setName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleMessage = e => setMessage(e.target.value);

  return (
    <form className={isVisible ? "emailForm" : "hiddenEmailForm"} onSubmit={handleOnSubmit}>
      <label>
        Your name
        <input type="text" name="name" placeholder="Name..." value={name} onChange={handleName} />
      </label>
      <label>
        Your email address
        <input type="email" name="to_name" value={email} onChange={handleEmail} placeholder='Email...' />
      </label>
      <label>
        Tell about the projects
        <textarea name="message" value={message} onChange={handleMessage} placeholder='Description...'></textarea>
      </label>
      <button type="submit">
        Send <FaArrowRight />
      </button>
    </form>
  );
};

export default EmailForm;
