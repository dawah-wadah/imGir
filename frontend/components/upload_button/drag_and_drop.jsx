import React, { Component } from 'react';
import DropZone from 'react-dropzone';

class Uploader extends Component {

  uploadFile(files){
    console.log('uploadFile: ');
  }
  render() {
    return (
      <div>
        <DropZone onDrop={this.uploadFile.bind(this)} />
      </div>
    );
  }
}

export default Uploader;
