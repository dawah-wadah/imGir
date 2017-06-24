import React from 'react';


const UploadModalContent = () => (
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    <div className='upload-icon'>
      <h1>Upload Icon</h1>
    </div>
    <div className='upload-form'>
      <form>
        Form for Upload
          upload a photo input
      </form>
    </div>
  </div>
);

export default UploadModalContent;
