import React from 'react';

class UploadPage {
  constructor(props) {
    this.images = this.props.images;
    this.state = {
      postTitle: this.props.postTitle,
      description: this.props.description
    };
  }

handleSubmit(e) {
  e.preventDefault();
}




  render(){
    
    console.log('something')
    return(
      // {this.props.images.length}
      // {this.state.postTitle}

    <h1>
      We are now on the New Post page
    </h1>
  );
  }
}


export default UploadPage;
