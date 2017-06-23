import React from 'react';

const SearchBarInput = () => (
  <div className="search-bar-content" id="mySearchBar"
    onClick={(e) => e.stopPropagation()}>
    <form className='search-form' method='get' action='imgur.com/search'>
    <input className='search-input'type="text" name="name" />
  </form>
</div>
);

export default SearchBarInput;
