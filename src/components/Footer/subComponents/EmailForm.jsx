import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../../../css/EmailForm.css';
import ValidateMessage from '../../ValidateMessage/ValidateMessage';

const EmailForm = ({ isVisible }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const index = email.includes("@")

  const closeModal = () => {
    setIsModalOpen(false);
    setValidationMessage(null);
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    if (name.length < 1) {
     
      setValidationMessage(
        <ValidateMessage resultText="Name is required" closeModal={closeModal}  />
      )
      return;
    }else if(index === false){
      setValidationMessage(
        <ValidateMessage resultText="@ is required" closeModal={closeModal}  />
      )
      return
    }else if(message.length < 1 ){
      setValidationMessage(
        <ValidateMessage resultText="Write something :)" closeModal={closeModal}  />
      )
      return
    }

    

    try {
      const result = await emailjs.sendForm('service_jboehkc', 'template_8h9a33j', e.target, 'QeZJWV4E4Bvm7v5Q-');
      setValidationMessage(
        <ValidateMessage resultText={`Wiadomość wysłana ${result.text}`} closeModal={closeModal} isModalOpen={isModalOpen} />
      );
    } catch (error) {
      setValidationMessage(
        <ValidateMessage resultText={error.text} closeModal={closeModal} isModalOpen={isModalOpen} />
      );
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleName = e => setName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleMessage = e => setMessage(e.target.value);


  return (
    <form className={isVisible ? "emailForm" : "hiddenEmailForm"} onSubmit={handleOnSubmit}>
      {validationMessage }
      <label>
        Your name
        <input type="text" name="name" placeholder="Name..." value={name} onChange={handleName} />
      </label>
      <label>
        Your email address
        <input type="email" formNoValidate name="to_name" value={email} onChange={handleEmail} placeholder='Email...' />
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
