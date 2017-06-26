import React from 'react';
import Uploader from './drag_and_drop';

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
      imageFile: null,
      imageUrl: null,
      title: 'Bullshit Title',
      description: 'Bullshit Description',
      main_image: true,
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

handleSubmit(e){
  e.preventDefault();
  let formData = new FormData();
  formData.append("image[title]", this.state.title);
  formData.append("image[description]", this.state.description);
  formData.append("image[main_image]", this.state.main_image);
  formData.append("image[image]", this.state.imageFile );
  this.props.uploadImage(formData);
}

// className="nodisplay" name="files[]"
// <label className="browse-btn" htmlFor="global-files-button">Browse</label>
// accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.pdf,.xcf,.webp" />

render(){
  return(
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    <div className='primary-actions'>
      <div className='drag-and-drop-box'>
        <img className='upload-giraffe' src='assets/upload-giraffe.png'></img>
        <img className='upload-pointer' src='assets/upload-pointer.png'></img>
      </div>
      <div className='drag-and-drop-text'>
        <input type="file" id="global-files-button"
          onChange={this.updateFile} />
      <button onClick={this.handleSubmit}>Upload</button>
        <img className='image-preview' src={this.state.imageUrl} />
        <p>or drag images here</p>
      </div>
      <div className='paste-url'>
        <input id="paste-url-input" placeholder="Paste Image or URL" />
      </div>
    <div className='misc'>
      <div className='buttom-stuff'>

        <a className='meme-generator'
          href='//imgur.com/memegen'>Create a Meme</a>
        <a className='meme-generator'
          href='//imgur.com/memegen'>Create a Meme</a>
        <a className='meme-generator'
          href='//imgur.com/memegen'>Create a Meme</a>
      </div>
      </div>
    </div>
    <span className="upload-modal-terms">
      By creating a post, you agree to Imgur's
      <a href="//imgur.com/tos">Terms of Service</a>
      and
      <a href="//imgur.com/privacy">Privacy Policy</a>
    </span>
  </div>
  );
}
}

export default UploadModalContent;
