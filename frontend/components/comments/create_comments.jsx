import React from 'react';

class NewComment extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			body: '',
			parent_id: this.props.parentId,
      parent_type: this.props.parentType,
		};
		this.updateState = this
			.updateState
			.bind(this);
		this.update = this
			.update
			.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateState(comment) {
		this.setState({body: comment.body});
	}

	update(field) {
		return e => this.setState({[field]: e.currentTarget.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		
		let commentData = {
			comment: {
        parent_id: this.state.parent_id,
        parent_type: this.state.parent_type,
				body: this.state.body
			}
		};
		this
			.props
			.createComment(commentData);
	}

	render() {

		return (
			<form onSubmit={this.handleSubmit} className="caption-create">
				<span className="icon-x right pointer"></span>
				<textarea placeholder="Write a comment" className='create-comment-box'></textarea>
				<textarea placeholder="Write a comment"
          onChange={this.update('body')}
          className='create-comment-box2'></textarea>

				<div className="summary">
					<input
						type="submit"
						value="Post"
						id="submit-comment"
						className="right btn btn-main"
						disabled=""/>
					<div className="counter right">140</div>
				</div>
			</form>
		);
	}
}

export default NewComment;
