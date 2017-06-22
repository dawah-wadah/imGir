import React from 'react';

const UploadButtonContent = () => (
  <div className="dropdown-content" id="myDropdown" onClick={(e) => e.stopPropagation}>
    <a>Upload an Image</a>
    <a>Make a Meme</a>
    <a href='//imagest.herukoapp.com'> Visit Yaakov's Site</a>
  </div>
);

export default UploadButtonContent;
