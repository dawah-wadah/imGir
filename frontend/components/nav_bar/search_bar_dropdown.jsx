import React from 'react';


// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     var dropdowns = document.getElementsByClassName("search-bar-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    document.getElementById("mySearchBar").classList.toggle("show");
  }

  render() {
    return (
    <div className="search-bar">
    <i className="fa fa-search dropbtn" onClick={this.handleClick}aria-hidden="true"></i>
    <div className="search-bar-content" id="mySearchBar">
      <form className='search-form' method='get' action='imgur.com/search'>
      <input className='search-input'type="text" name="name" />
    </form>
  </div>
    </div>

  );
}

}



export default SearchBar;
