import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './nav_bar/header';
import Modal from './modal';
import Main from './main_container';

const App = () => {
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

	// When the user clicks on the button, scroll to the top of the document
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

export default App;
