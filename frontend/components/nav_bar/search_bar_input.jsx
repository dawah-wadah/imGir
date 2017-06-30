import React from 'react';

const SearchBarInput = () => (
  <div className="search-bar" id="mySearchBar"
    onClick={(e) => e.stopPropagation()}>
    <input className='search-input search-bar'type="text" name="name" />
</div>
);
export default SearchBarInput;



// <div id="mySearchBar" className="search-bar-content">
//   <input className="search-input" type='text' name='name'></input>
//   <form className='search-form' method='get' action='imgur.com/search'>
//     <div className="search-input search-bar-addition">SEARCH SYNTAX</div>
//   </form>
// </div>
