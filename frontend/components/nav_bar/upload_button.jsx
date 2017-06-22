import React from 'react';




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
    document.getElementById("myDropdown").classList.toggle("show");
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
    <i className="fa fa-chevron-circle-down dropbtn" onClick={this.handleClick}aria-hidden="true"></i>
      <div className="dropdown-content" id="myDropdown">
        <a>Upload an Image</a>
        <a>Make a Meme</a>
        <a href='//imagest.herukoapp.com'> Visit Yaakov's Site</a>
      </div>
    </div>
  </div>
  </span>
  );
}

}



export default UploadButton;
