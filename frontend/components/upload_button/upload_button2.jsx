import React from 'react';
import {bindall} from 'lodash';
import {Redirect} from 'react-router-dom';
import Dropzone from 'react-dropzone';

class UploadModalContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			postTitle: 'Default Post Title',
			imageFile: null,
			imageUrl: null,
			description: 'Working Description',
			main_image: true
		};

		this.updateFile = this
			.updateFile
			.bind(this);
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
		this.updateState = this
			.updateState
			.bind(this);
		this.update = this
			.update
			.bind(this);

	}

	updateState(post) {
		this.setState({title: post.title, description: post.description});
	}

	updateFile(e) {
		let file;
		let fileReader;
		if (e.length > 1){
			e.forEach((event) => {
				file = event;
				fileReader = new FileReader();
				if (file) {
					fileReader.readAsDataURL(file);
				}
				fileReader.onloadend = function() {
					this.setState({
						images: this.state.images.concat({imageFile: file, imageUrl: fileReader.result})
						});
						debugger;
					}.bind(this);


			});
		} else {
			file = e[0];
			fileReader = new FileReader();
			fileReader.onloadend = function() {
				this.setState({
					images: this.state.images.concat({imageFile: file, imageUrl: fileReader.result})
					});
					debugger;
			}.bind(this);
			if (file) {
				fileReader.readAsDataURL(file);
			}

		}
	}

	update(field) {
		return e => this.setState({[field]: e.currentTarget.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		let postData = {
			post: {
				title: this.state.postTitle,
				description: this.state.description
			}
		};
		let imageData = new FormData();
		imageData.append("image[description]", this.state.description);
		imageData.append("image[main_image]", this.state.main_image);
		imageData.append("image[image]", this.state.imageFile);
		this
			.props
			.createPost(postData)
			.then(post => {
				imageData.append("image[imageable_id]", post.id);
				imageData.append("image[imageable_type]", 'Post');
				return (this.props.uploadImage(imageData).then(response => {
					this
						.props
						.clearModals();
					this
						.props
						.history
						.push(`/posts/${response.id}`);
				}));
			});
	}

	render() {
		const thingsToShow = [ <div className = 'upload-actions'>
		<div className='drag-and-drop-text'>
			<div className='drag-and-drop-box'>
				<Dropzone
					onDrop={this.updateFile}
					className='drag-and-drop-box draggable'>
					{this.state.images.length > 0
						? <p>Reticulating Spline...</p>
						: <p>Click or Drag Your Image Here</p>}
				</Dropzone>
				<img className='upload-giraffe'
					src={window.images.upload_giraffe}></img>
				<img className='upload-pointer'
					src={window.images.upload_pointer}></img>
			</div>
      </div>
		</div>

  ];

  const gottenPhoto = [
    <div className='uploadForm'>
			{this.state.images.map((image) => {
				debugger
				return(<img className='image-preview' src={image.imageUrl} />);
			})}
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
  </div>);
		}
	}

	export default UploadModalContent;
