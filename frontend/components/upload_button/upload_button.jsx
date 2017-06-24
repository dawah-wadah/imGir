import React from 'react';


const UploadModalContent = () => (
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    <div className='primary-actions'>

    <div className='drag-and-drop'>
      <img className='upload-giraffe' src='assets/upload-giraffe.png'></img>
      <img className='upload-pointer' src='assets/upload-pointer.png'></img>
    </div>
    <div className='upload-form'>

      <div className='upload-input-container'>
      <input type="file" id="global-files-button"
        className="nodisplay" name="files[]"
        multiple=""
        accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.pdf,.xcf,.webp" />
      <label className="browse-btn" htmlFor="global-files-button">Browse</label>
      <p>or drag images here</p>
    </div>
  </div>
    </div>
  </div>
);

export default UploadModalContent;
