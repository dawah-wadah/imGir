import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentsIndexItem from './comments_index_item';
import { requestOneComment } from '../../actions/comment_actions';
import { displayModal } from '../../actions/modal_actions';
import {editVote, createVote, deleteVote } from '../../actions/vote_actions';


const mapStateToProps = ({ session }) => {

  return {
    loggedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = dispatch => {

  return {
    displayModal: (component) => dispatch(displayModal(component)),
    requestOneComment: (id) => dispatch(requestOneComment(id)),
    createVote: (voteData) => dispatch(createVote(voteData)),
    editVote: (voteData) => dispatch(editVote(voteData)),
    deleteVote: (id) => dispatch(deleteVote(id))

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndexItem));
