import React from 'react';
import Moment from 'react-moment';
import SessionFormModal from '../session_form/session_form_modal';

class NewComment extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			body: '',
			parent_id: this.props.parentId,
			parent_type: this.props.parentType,
			post_id: this.props.parentId,
			charsLeft: 140
		};
		this.update = this
			.update
			.bind( this );
		this.handleSubmit = this
			.handleSubmit
			.bind( this );
	}


	update( field ) {
		return e => this.setState( {
			[ field ]: e.currentTarget.value
		} );
	}

	handleSubmit( e ) {
		e.preventDefault();
		if ( this.props.loggedIn ) {
			let commentData = {
				comment: {
					body: this.state.body,
					parent_id: this.props.parentId,
					parent_type: this.state.parent_type,
					post_id: this.props.parentId
				}
			};
			this
				.props
				.createComment( commentData )
				.then( () => this.setState( {
					body: ''
				} ) );
		} else {
			this.props.displayModal( <SessionFormModal/> );
		}
	}

	render() {
		return (
			<label htmlFor='comment_box'>

	<form className="caption-create" >
			<input id='comment_box' type="text" className="create-comment-box2" placeholder="Write a comment" onChange={this.update('body')} value={this.state.body}></input>
		<div className="summary">
					<button onClick={this.handleSubmit} className="right post-button spacer">Post</button>
					<div className="couter right ">{140 - this.state.body.length}</div>
		</div>
	</form>
</label>
		);
	}

}

export default NewComment;
