import User from './user';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { requestOneUser, requestUserPosts, requestUserComments } from '../../actions/user_actions';



const mapStateToProps = (state) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
  requestOneUser: (id) => dispatch(requestOneUser(id)),
  requestUserComments: (id, parent_type) => dispatch(requestUserComments(id, parent_type)),
  requestUserPosts: (id) => dispatch(requestUserPosts(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
