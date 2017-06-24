import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
