import React, { useState } from 'react';
import { ReactComponent as SearchButton } from '../../assets/search-button.svg';
import './search-box.styles.scss';

const SearchBox = () => {
  const [searchBox, setSearch] = useState('');
  const [searchField] = [searchBox];

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <form className='search-box-form'>
      <label for='Busque Aqui...'/>
      <input value={ searchField } type='search' name='searchField' id='Busque Aqui...' placeholder='BUSQUE AQUI...' onChange={ handleChange } className='search-box-input'></input>
      <SearchButton className='search-box-button'></SearchButton>
    </form>
  )
};

export default SearchBox;