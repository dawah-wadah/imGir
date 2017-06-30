import React from 'react';
import { connect } from 'react-redux';
import { displayDropdown } from '../../actions/dropdown_actions';
import SearchBarInput from './search_bar_input';



class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.displayDropdown({searchBar: !this.props.visible});
  }
  // <div className="search-bar-container">
  //   <i className="fa fa-search dropbtn" onClick={this.handleClick} aria-hidden="true"></i>
  //   { this.props.visible ?   <div className="search-bar" id="mySearchBar"
  //     onClick={(e) => e.stopPropagation()}>
  //     <input className='search-input search-bar'type="text" name="name" />
  //   </div> : null }
  // </div>
  // <div className="icon-container">
  // </div>
  render() {
    return (

     <div className="search-icon-container" >
         <img className="search-icon" id="search-icon" onClick={this.handleClick} src={window.images.search_icon}/>
       {this.props.visible ?
         <div id="search-icon-menu" className="hidden">
           <input className="search-bar"></input>
           <div className="search-bar search-bar-addition">SEARCH SYNTAX</div>
         </div>
         : null }
     </div>

  );
  }
}

const mapStateToProps = (state) => ({
  visible: Boolean(state.dropdown.searchBar)
});

const mapDispatchToProps = (dispatch) => ({
  displayDropdown: (obj) => dispatch(displayDropdown(obj))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
