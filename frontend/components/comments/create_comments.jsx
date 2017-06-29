import React from 'react';
import Moment from 'react-moment';
import SessionFormModal from '../session_form/session_form_modal';

class NewComment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
				body: '',
				parent_id: this.props.parentId,
				parent_type: this.props.parentType,
				post_id: this.props.parentId,
			charsLeft: 140
		};
		this.updateState = this
			.updateState
			.bind(this);
		this.update = this
			.update
			.bind(this);
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
	}

	updateState(stuff) {
		this.setState({body: stuff.body, parent_id: this.props.parent_id, parent_type: this.props.parent_type});
	}

	update(field) {
			return e => this.setState({[field]: e.currentTarget.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.props.loggedIn) {
		let commentData = {
			comment: {
				body: this.state.body,
				parent_id: this.state.parent_id,
				parent_type: this.state.parent_type,
				post_id: this.state.post_id
			}
		};
		this
			.props
			.createComment(commentData)
			.then(() => this.setState({body: ''}));
		} else {
			this.props.displayModal(<SessionFormModal/>);
		}
	}

	render() {

		// <textarea placeholder="Write a comment" className='create-comment-box'></textarea>
		return (
			<form onSubmit={this.handleSubmit} className="caption-create">
				<span className="icon-x right pointer"></span>
				<textarea
					placeholder="Write a comment"
					onChange={this.update('body')}
					value={this.state.body}
					className='create-comment-box2'></textarea>

				<div className="summary">
					<input
						type="submit"
						value="Post"
						id="submit-comment"
						className="right btn btn-main"
						disabled=""/>
					<div className="counter right">{140 - this.state.body.length}</div>
				</div>
			</form>
		);
	}
}

export default NewComment;
