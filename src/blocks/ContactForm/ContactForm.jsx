import './ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1iyifs9', 'template_us28qla', form.current, {
        publicKey: 'lXEelAK3cSEeMiC1t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <div id='contacts' className="contact-form">
      <div className='contact-form__container'>
        <p className='contact-form__title text-big'>НУЖЕН КОНТЕНТ?</p>
        <p className='contact-form__subtitle'>ЗАПОЛНИ ЗАЯВКУ</p>
        <form className='contact-form__form' ref={form} onSubmit={sendEmail}>
          <input className='contact-form__input text-xs' placeholder='ИМЯ' name="user_name" required></input>
          <input className='contact-form__input text-xs' placeholder='ОРГАНИЗАЦИЯ' name="user_organisation" required></input>
          <input className='contact-form__input text-xs' placeholder='ТЕЛЕФОН' name="user_phone" required></input>
          <input className='contact-form__input text-xs' placeholder='КОММЕНТАРИЙ' name="user_comment"></input>
          <button className='contact-form__button' type='submit'>ОТПРАВИТЬ</button>
        </form>
      </div>
       {/* <iframe style={{width: "100%", height: "100%", border: "none"}} src="https://6xfrsv-3000.csb.app/"></iframe> */}
    </div>
  );
}

export default ContactForm;
