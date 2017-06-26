import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './nav_bar/header';
import Modal from './modal';
import Main from './main_container';


const App = () => (
  <div>
    <Modal/>
    <Header/>
    <Main/>
  </div>
);

export default App;
