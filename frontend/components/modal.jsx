import React from 'react';
import { connect } from 'react-redux';
import {displayModal} from '../actions/modal_actions';

class Modal extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { isOpen, component } = this.props;

    if (isOpen) {
      return(
        <div className='modal-background'>
          <div className='modal-content'>
            {component}
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


export default connect(mapStateToProps, null)(Modal);
