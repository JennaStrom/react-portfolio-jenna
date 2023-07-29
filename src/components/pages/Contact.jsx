// import React from "react";
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'Email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Please enter a valid email');
      } else {
        setErrorMessage('');
      }

    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A(n) ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='box' >
    <section className="container">
      <h1 id='contact-header' className="mb-5 fw-bold">Contact Me!</h1>
      <form>
      {errorMessage && (
          <div>
            <p className="error-text text-danger fs-3">{errorMessage}</p>
          </div>
        )}
        <div className="mb-3">
          <label for="Input1" class="form-label">Name:</label>
          <input type="name" name="name" class="form-control" id="Input1" placeholder="Your name here" required defaultValue={name} onBlur={handleChange}></input>
        </div>
        <div class="mb-3">
          <label for="Input2" class="form-label">Email address:</label>
          <input type="email" name="email" class="form-control" id="Input2" required defaultValue={email} placeholder="name@example.com" onBlur={handleChange}></input>
        </div>
        <div class="mb-3">
          <label for="Textarea1" class="form-label" >Message</label>
          <textarea type="message" name="message" class="form-control" id="Textarea1" rows="3" required defaultValue={message} onBlur={handleChange}></textarea>
        </div>
        <button class="btn btn-outline-dark mb-5" type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
    </div>
  );
}

export default ContactForm;