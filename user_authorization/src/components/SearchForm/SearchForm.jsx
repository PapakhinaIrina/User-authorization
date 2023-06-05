import React, { useState } from 'react';
import './style.css';





export default function SearchForm () {

  const [search, setSearch] = useState('');


  return (
    <div className='wrapperSearchForm'>
      <div >
      <form className='containerSearchForm'>
        <label>Поиск</label>

          <input
          type='text'
          placeholder="Поиск" 
          value={search}
          onChange={e => setSearch(e.target.value)}

          />
        <div className='wrapperBtnSearch'>
          <button className='btnSubmitSearch'>Поиск</button>
        </div>
      </form>
      </div>
    </div>
  )
}