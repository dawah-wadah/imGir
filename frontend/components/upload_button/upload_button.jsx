import React from 'react';
import Dropzone from 'react-dropzone';

const UploadModalContent = () => (

  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    <div className='primary-actions'>
      <div className='drag-and-drop-box'>
        <img className='upload-giraffe' src='assets/upload-giraffe.png'></img>
        <img className='upload-pointer' src='assets/upload-pointer.png'></img>
      </div>
      <div className='drag-and-drop-text'>
        <input type="file" id="global-files-button"
        className="nodisplay" name="files[]"
        multiple=""
        accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.pdf,.xcf,.webp" />
        <label className="browse-btn" htmlFor="global-files-button">Browse</label>
        <p>or drag images here</p>
      </div>
      <div className='paste-url'>
        <input id="paste-url-input" placeholder="Paste Image or URL" />
      </div>
    <div className='misc'>
      <div className='buttom-stuff'>

        <a className='meme-generator' href='//imgur.com/memegen'>Create a Meme</a>
        <a className='meme-generator' href='//imgur.com/memegen'>Create a Meme</a>
        <a className='meme-generator' href='//imgur.com/memegen'>Create a Meme</a>
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

export default UploadModalContent;
