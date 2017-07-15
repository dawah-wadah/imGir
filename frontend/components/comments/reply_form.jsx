import React from 'react';
import { createComment } from '../../actions/comment_actions';
import SessionFormModal from '../session_form/session_form_modal';

class ReplyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
				body: '',
				parent_id: this.props.parentId,
				parent_type: this.props.parentType,
				post_id: this.props.CommentId,
			charsLeft: 140
		};
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.toggle(e);
      this.props.toggleChild(e);
      if (this.props.open) {
        this.props.replies(e);
      }
		} else {
			this.props.displayModal(<SessionFormModal/>);
		}
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
     });
  }

  render() {
    return (
      <div>
        <form className="caption-create">
          <div >
            <input type="text" className="create-comment-box2" placeholder="Post a Reply" onChange={this.update('body')} value={this.state.body}></input>
            <div className="summary">
                <button onClick={this.handleSubmit} className="right btn btn-main spacer">Reply</button>
                <div className="counter right">{140 - this.state.body.length}</div>
            </div>
          </div>
        </form>
      </div>
    );
  }

}


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { displayModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session }, {parentId}) => {
  return {
    CommentId: parentId,
    loggedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = dispatch => ({
  displayModal: (component) => dispatch(displayModal(component)),
  createComment: (comment) => dispatch(createComment(comment))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyForm));
