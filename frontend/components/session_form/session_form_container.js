import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { login, logout, signup, receiveErrors, receiveCurrentUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    receiveCurrentUser: (id) => dispatch(receiveCurrentUser(id)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
