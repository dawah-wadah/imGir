import User from './user';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { requestOneUser } from '../../actions/user_actions';



const mapStateToProps = (state) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
  requestOneUser: (id) => dispatch(requestOneUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
