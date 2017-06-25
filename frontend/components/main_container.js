import { clearDropdowns } from '../actions/dropdown_actions';
import {connect} from 'react-redux';
import Main from './main';


const mapDispatchToProps = (dispatch) => ({
  clearDropdowns: () => dispatch(clearDropdowns())
});


export default connect(null, mapDispatchToProps)(Main);
