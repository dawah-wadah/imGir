import React from 'react';
import { bindall } from 'lodash';

const style = {
  zIndex: '3',
  margin: 'auto',
  position: 'fixed',
  width: '416px',
  height: '224px',
  borderWidth: '2px',
  borderColor: 'rgb(102, 102, 102)',
  borderStyle: 'dashed',
  borderRadius: '5px',
};

class UploadModalContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postTitle: 'Default Post Title',
      imageFile: null,
      imageUrl: null,
      title: 'Working Title',
      description: 'Working Description',
      main_image: true,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.update = this.update.bind(this);

  }

  updateState(post) {
    this.setState({
      title: post.title,
      description: post.description
    });
  }

updateFile(e) {
  let file = e.currentTarget.files[0];
  let fileReader = new FileReader();
  fileReader.onloadend = function () {
    this.setState({ imageFile: file, imageUrl: fileReader.result});
  }.bind(this);

  if (file) {
    fileReader.readAsDataURL(file);
  }
}

update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

 handleSubmit(e) {
  e.preventDefault();
  let postData = {post: {
    title: this.state.postTitle,
    description: this.state.description
  }};
  let imageData = new FormData();
  imageData.append("image[title]",this.state.title);
  imageData.append("image[description]",this.state.description);
  imageData.append("image[main_image]",this.state.main_image);
  imageData.append("image[image]",this.state.imageFile );
  this.props.createPost(postData).then(post => {
    imageData.append("image[imageable_id]", post.id );
    imageData.append("image[imageable_type]", 'Post' );
    return (
    this.props.uploadImage(imageData)
  );});
}


render(){
  const thingsToShow = [
    <div className='upload-actions'>
      <div className='drag-and-drop-text'>
        <input type="file" id="global-files-button"
          onChange={this.updateFile} />
        <div className='drag-and-drop-box'>
          <img className='upload-giraffe' src='assets/upload-giraffe.png'></img>
          <img className='upload-pointer' src='assets/upload-pointer.png'></img>
        </div>
      </div>
      <div className='paste-url'>
        <input id="paste-url-input" placeholder="Paste Image or URL" />
      </div>
      <div className='misc'>
      </div>
    </div>,
    <span className="upload-modal-terms">
      By creating a post, you agree to Imgur's
      <a href="//imgur.com/tos">Terms of Service</a>
      and
      <a href="//imgur.com/privacy">Privacy Policy</a>
    </span>

  ];

  const gottenPhoto = [
    <div className='uploadForm'>
      <img className='image-preview' src={this.state.imageUrl} />
        <input type="text"
          value={this.state.postTitle}
          onChange={this.update('postTitle')}
          className="br5 lightest-dark login-input"
          placeholder='Write a title here'
        />
        <input type="text"
          value={this.state.description}
          onChange={this.update('description')}
          className="br5 lightest-dark login-input"
          placeholder='What is your description'
        />
      <button onClick={this.handleSubmit}>Upload</button>
    </div>

  ];

  return(
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    { this.state.imageUrl ?
      gottenPhoto
      :thingsToShow
    }
  </div>
);
}
}

export default UploadModalContent;
