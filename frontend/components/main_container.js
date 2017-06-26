import { clearDropdowns } from '../actions/dropdown_actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';


const mapDispatchToProps = (dispatch) => ({
  clearDropdowns: () => dispatch(clearDropdowns())
});


export default withRouter(connect(null, mapDispatchToProps)(Main));
