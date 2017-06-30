import React from 'react';
import { createComment } from '../../actions/comment_actions';

class NewCommentReplyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.loggedIn) {
      const comment = { body: this.state.body,
        commenter_id: this.props.currentaccountId,
        commentable_id: this.props.commentableId,
        commentable_type: this.props.commentableType,
        post_id: this.props.currentPost,
      };
      this.props.createComment(comment);
    } else {
      this.props.history.push('/login');
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
        <form className="new-comment-form">
          <div >
            <input type="text" className="comment-input" placeholder="Write a comment" onChange={this.update('body')} value={this.state.body}></input>
            <div className="comment-details-container">
                <div className="char-counter">140</div>
                <button onClick={this.handleSubmit} className="comment-button">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }, ownProps) => {
  return {
    currentPost: ownProps.match.location.params.id,
    loggedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentReplyForm));
