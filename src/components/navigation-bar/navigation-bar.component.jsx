import React from 'react';
import { ReactComponent as NavBarDropdown } from '../../assets/nav-bar-dropdown.svg';
import './navigation-bar.styles.scss';

const NavigationBar = () => {
  return (
    <nav className='nav-bar-container'>
      <ul>
        <li><a href="#todas-categorias">Todas as C<span className='lowercase-letter'>ategorias</span></a></li>
        <li className='relative-dropdown-position'>
          <a href="#som-profissional">Som Profis<span className='lowercase-letter'>sional</span><NavBarDropdown className='nav-bar-dropdown'/></a>
        </li>
        <li className='relative-dropdown-position'>
          <a href="#instrumentos">Instrument<span className='lowercase-letter'>os Musicais</span><NavBarDropdown className='nav-bar-dropdown'/></a>
        </li>
        <li><a href="#promocoes">Prom<span className='lowercase-letter'>oções</span></a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  )
};

export default NavigationBar;