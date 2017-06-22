import React from 'react';
import { connect } from  'react-redux';
import { displayDropdown } from '../../actions/dropdown_actions';
import UploadButtonContent from './upload_button_contents';




// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

class UploadButton extends React.Component {
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
  <span className='upload-button-container'>
    <div className='upload-button'>
      <div className='upload-icon'>
        <i className="fa fa-cloud-upload" aria-hidden="true"></i>
      </div>
      <div className='upload-text'>
        New Post
      </div>
    <div className="dropdown">
      <i className="fa fa-chevron-circle-down dropbtn"
         onClick={this.handleClick} aria-hidden="true"></i>
      { this.props.visible ? <UploadButtonContent /> : null }
    </div>
  </div>
  </span>
  );
}

}
const mapStateToProps = (state) => {
  return {
    visible: Boolean(state.dropdown.uploadDropdown)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayDropdown: () => dispatch(displayDropdown({ uploadDropdown: true }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton);
