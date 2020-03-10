import React, { useState } from 'react';
import { ReactComponent as SocialMediaInstagram } from '../../assets/social-media-instagram.svg';
import { ReactComponent as SocialMediaTwitter } from '../../assets/social-media-twitter.svg';
import { ReactComponent as SocialMediaFacebook } from '../../assets/social-media-facebook.svg';
import { ReactComponent as PaymentMethods } from '../../assets/payment-methods.svg';
import { ReactComponent as SecuritySSLImage } from '../../assets/security-ssl.svg';
import { ReactComponent as SecurityVTEXImage } from '../../assets/security-vtex.svg';
import './institutional.styles.scss';

const InstitutionalSection = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: ''
  });
  const [displayForm, setDisplayForm] = useState(true);
  const { name, email } = userCredentials;
  const [showForm] = [displayForm];

  const handleSubmit = event => {
    event.preventDefault();
    setDisplayForm(false);
  }
    
  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  };

  return (
    <section className='institutional-container'>
      <article className='institutional-first-section'>
        <div className='institutional-block'>
          <h5>Institucio<span className='lowercase-letter'>nal</span></h5>
          <ul className='institutional-block-options'>
            <li>Quem Somos</li>
            <li>Nossas Lojas</li>
          </ul>
        </div>
        <div className='attendance-block'>
          <h5 className='attendance-title'>Atendiment<span className='lowercase-letter'>o</span></h5>
          <ul>
            <li>Fale Conosco</li>
            <a href='mailto:vendas@ninjasom.com.br'>
            <li>vendas@ninjasom.com.br</li>
            </a>
          </ul>
        </div>
      </article>

      <article className='institutional-second-section'>
        <div>
          <h5>Ajuda e Su<span className='lowercase-letter'>porte</span></h5>
          <ul>
            <li>Política de Privacidade</li>
            <li>Política de Trocas</li>
            <li>Prazos de Entrega</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
        <figure className='social-media-block'>
          <a href='https://www.instagram.com/ninjasom/' target='_blank' rel='noopener noreferrer'>
            <SocialMediaInstagram className='social-media-instagram'/>
          </a>
          <a href='https://twitter.com/ninjasom' target='_blank' rel='noopener noreferrer'>
            <SocialMediaTwitter className='social-media-twitter'/>
          </a>
          <a href='https://www.facebook.com/ninjasomoficial/' target='_blank' rel='noopener noreferrer'>
            <SocialMediaFacebook className='social-media-facebook'/>
          </a>
        </figure>
      </article>

      <article className='institutional-third-section'>
        <div>
          <h5>Formas de <span className='lowercase-letter'>Pagamento</span></h5>
          <figure className='payments-methods-images-block'>
            <PaymentMethods />
          </figure>
        </div>
        <div>
          <h5>Segurança</h5>
          <figure className='security-images-block'>
            <SecuritySSLImage className='security-ssl-image'/>
            <SecurityVTEXImage className='security-vtex-image'/>
          </figure>
        </div>
      </article>

      <article className='institutional-fourth-section'>
        <div className='institutional-fourth-section-target-size'>
          <div className='institutional-headers'>
            <p className='institutional-newsletter-text'>Assine Nosso Newsletter</p>
            <p className='institutional-highlights-text'>e Receba N<span className='lowercase-letter'>ovidades e Promoções</span></p>
          </div>
          {
            showForm ?

            <form className='institutional-newsletter-form' onSubmit={ handleSubmit }>
              <label for='name'></label>
              <input type='text' id='name' name='name' value={ name } placeholder='SEU NOME' required onChange={ handleChange }></input>
              <label for='e-mail'></label>
              <input type='email' id='e-mail' name='email' value={ email } placeholder='SEU E-MAIL' required onChange={ handleChange }></input>
              <button className='institutional-newsletter-form-button'>Enviar</button>
            </form>
          :
          <div className='institutional-newsletter-form'>
            <p className='institutional-newsletter-success-message'>Seu e-mail foi cadastrado com sucesso!</p>
          </div>
          }
        </div>
      </article>
    </section>
  )
};

export default InstitutionalSection;