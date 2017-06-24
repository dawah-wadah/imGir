import React from 'react';
import { connect } from 'react-redux';
import {displayModal, clearModals} from '../actions/modal_actions';

class Modal extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.isOpen) {
      return(
        <div className='modal-background'
          onClick={() => this.props.clearModals()}>
          <div className='modal-content'>
            {this.props.component}
          </div>
        </div>
      );
    } else { return null;}
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  component: state.modal.component
});

const mapDispatchToProps = (dispatch) => ({
  clearModals: () => dispatch(clearModals())
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
