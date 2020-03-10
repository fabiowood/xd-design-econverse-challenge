import React from 'react';
import { ReactComponent as EConverseLogo } from '../../assets/footer-econverse-logo.svg';
import { ReactComponent as VTEXLogo } from '../../assets/footer-vtex-logo.svg';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <p className='footer-company-info'>NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15</p>
      <figure className='footer-logos'>
        <a href='https://econverse.digital/' target='_blank' rel='noopener noreferrer'>
        <EConverseLogo className='footer-econverse-logo'/>
        </a>
        <a href='https://vtex.com/br-pt/' target='_blank' rel='noopener noreferrer'>
        <VTEXLogo className='footer-vtex-logo'/>
        </a>
      </figure>
    </footer>
  )
};

export default Footer;