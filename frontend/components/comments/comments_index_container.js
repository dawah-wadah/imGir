import { connect } from 'react-redux';
import CommentsIndex from './comments_index'
import { requestAllComments } from '../../actions/comment_actions';
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

  return {
  comments: selectAllComments(state, ownProps.commentIds)
};
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: (id) => dispatch(requestAllComments(id))
});

export default connect(
  mapStateToProps,
  null
)(CommentsIndex)
