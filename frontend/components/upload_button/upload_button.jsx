import React from 'react';
import {bindall} from 'lodash';
import {Redirect} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import values from 'lodash/values';

class UploadModalContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			postTitle: 'Default Post Title',
			imageFile: null,
			imageUrl: null,
			description: 'Working Description',
			main_image: true,
			main_image_index: 0,
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
			this.selectMainPhoto = this.selectMainPhoto.bind(this);

	}

	updateState(post) {
		this.setState({title: post.title, description: post.description});
	}

	updateFile(e) {
		e.forEach((image) => {
		if (image.type.split('/')[0] !== 'image') return null;
		let file = image;
		let fileReader = new FileReader();
		fileReader.onloadend = function() {
			this.setState({
				images: this.state.images.concat({imageFile: file, imageUrl: fileReader.result})
				});
		}.bind(this);
		if (file) {
			fileReader.readAsDataURL(file);
		}

	}
);
	}


	update(field) {
		return e => this.setState({[field]: e.currentTarget.value});
	}

	selectMainPhoto(obj){
		this.setState({main_image_index: this.state.images.indexOf(obj)});
	}

	handleSubmit(e) {
		e.preventDefault();
		let postData = {
			post: {
				title: this.state.postTitle,
				description: this.state.description
			}
		};

		this
		.props
		.createPost(postData)
		.then(post => {
		values(this.state.images).forEach((image) => {
		let imageData = new FormData();
		imageData.append("image[description]", this.state.description);
		this.state.main_image_index === this.state.images.indexOf(image)
		? imageData.append("image[main_image]", true)
		: imageData.append("image[main_image]", false);


		imageData.append("image[image]", image.imageFile);
		this.setState({main_image: false});
				imageData.append("image[imageable_id]", post.id);
				imageData.append("image[imageable_type]", 'Post');
				return (this.props.uploadImage(imageData).then(response => {
					this.props.clearModals();
					this.props.history.push(`/posts/${response.id}`);
				}, err => {
					this.props.deletePost(post.id);}));
			});
		});
	}


	imagePreviews() {
		return this.state.images.map((image => {
			let styleName;
			this.state.images.indexOf(image) === this.state.main_image_index
			? styleName = 'image-preview-selected'
			: styleName = 'image-preview';
			return (
			<img id={styleName} src={image.imageUrl}
				key={this.state.images.indexOf(image)}
				onMouseDown={() => this.selectMainPhoto(image)} />
		);}));
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
        <input type="text"
          onChange={this.update('postTitle')}
          className="new-post-text"
          placeholder='Write a title here'
        />
			<div className='all-pictures'>
				{this.imagePreviews()}
			</div>
			<textarea type="text"
          onChange={this.update('description')}
          className="new-post-text bigger"
          placeholder='What is your description'
        />
			<button className='upload-btn' onClick={this.handleSubmit}>Upload</button>
    </div>

  ];

  return(
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    { this.state.images.length > 0 ?
      gottenPhoto
      :thingsToShow
    }
  </div>);
		}
	}

	export default UploadModalContent;
