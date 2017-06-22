import React from 'react';
import { connect } from 'react-redux';

import MenuDropdownContents from './menu_dropdown_contents.jsx';
import { displayDropdown } from '../../actions/dropdown_actions';


class MenuDrop extends React.Component {
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
      <span className='link-menu'>
        <div className='info-menu-button'>
        <div className="dropdown">
          <i className="fa fa-chevron-circle-down dropbtn"
            onClick={this.handleClick} aria-hidden="true"></i>
          { this.props.visible ? <MenuDropdownContents /> : null }
        </div>
      </div>
      </span>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    visible: Boolean(state.dropdown.menuDropDown)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayDropdown: () => dispatch(displayDropdown({ menuDropDown: true }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDrop);
