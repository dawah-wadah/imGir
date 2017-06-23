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
    this.props.displayDropdown();
  }

  render() {
    return (
    <div className="search-bar">
      <i className="fa fa-search dropbtn" onClick={this.handleClick}aria-hidden="true"></i>
      { this.props.visible ? <SearchBarInput/> : null }
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  visible: Boolean(state.dropdown.searchBar)
});

const mapDispatchToProps = (dispatch) => ({
  displayDropdown: () => dispatch(displayDropdown({searchBar: true}))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
