import React from 'react';

const SearchBarInput = () => (
  <div className="search-bar" id="mySearchBar"
    onClick={(e) => e.stopPropagation()}>
    <input className='search-input search-bar'type="text" name="name" />
</div>
);
export default SearchBarInput;
