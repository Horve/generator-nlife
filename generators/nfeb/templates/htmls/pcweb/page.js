/**
 * @jsdoc function
 * @name <%= appname %>.page:<%= pageName %>
 * @description
 * # <%= classedName %>
 * page of the <%= appname %>
 * `<<%= classedName %>App/>` entry file
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/<%= pageName %>.scss';
import <%= classedName %>App from '../components/<%= pageName %>/app.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/<%= projName %>/<%= pageName %>';

let store = createStore(reducer, applyMiddleware(thunk));

export default class <%= classedName %>AppEntry extends Component {
  render() {
    return (
      <Provider store={store}>
        <<%= classedName %>App />
      </Provider>
    );
  };
}