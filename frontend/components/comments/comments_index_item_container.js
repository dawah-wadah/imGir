import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentsIndexItem from './comments_index_item';
import { requestOneComment } from '../../actions/comment_actions'
import { toggleUpvote, toggleDownvote } from '../../actions/vote_actions';

const mapStateToProps = ({ session }) => {

  return {
    loggedIn: Boolean(session.currentUser),
    accountId: session.currentUser ? session.currentUser.id : null
  };
};

const mapDispatchToProps = dispatch => {

  return {
    requestOneComment: (id) => dispatch(requestOneComment(id)),
    toggleUpvote: (vote, voted) => dispatch(toggleUpvote(vote, voted)),
    toggleDownvote: (vote, voted) => dispatch(toggleDownvote(vote, voted)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndexItem));
