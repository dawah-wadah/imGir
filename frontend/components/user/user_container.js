import User from './user';
import values from 'lodash/values';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { requestOneUser, requestUserPosts, requestUserComments } from '../../actions/user_actions';



const mapStateToProps = ({user}) => ({
  user: user.user,
  posts: values(user.posts),
  comments: values(user.comments)
});

const mapDispatchToProps = (dispatch) => ({
  requestOneUser: (id) => dispatch(requestOneUser(id)),
  requestUserComments: (id, parent_type) => dispatch(requestUserComments(id, parent_type)),
  requestUserPosts: (id, type) => dispatch(requestUserPosts(id, type))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
