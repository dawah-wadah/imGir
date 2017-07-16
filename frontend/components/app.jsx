import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route, withRouter } from 'react-router-dom';
import Header from './nav_bar/header';
import Modal from './modal';
import Main from './main_container';
import UploadModalContent from './upload_button/upload_button_container';

const App = (props) => {
	window.onscroll = function() {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document
				.getElementById("myBtn")
				.style
				.display = "block";
		} else {
			document
				.getElementById("myBtn")
				.style
				.display = "none";
		}
	}

	function topFunction() {
		document.body.scrollTop = 0; // For Chrome, Safari and Opera
		document.documentElement.scrollTop = 0; // For IE and Firefox
	}

  return (
  <div>
    <button onClick={topFunction} id ="myBtn" title="Go to top" >Head back to Top </button>
    <Modal/><Header/><Main />
  </div>);
};

import { displayModal } from '../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    visible: Boolean(state.dropdown.uploadDropdown),
    modal: Boolean(state.dropdown.uploadModal)
  };
};

const mapDispatchToProps = dispatch => ({
	displayModal: (content) => dispatch(displayModal(content))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
