/**
 * @jsdoc function
 * @name <%= appname %>.page:<%= pageName %>
 * @description
 * # <%= classedName %>
 * page of the <%= appname %>
 * `<<%= classedName %>App/>` entry file
 */
var g_mend = new Date();
import React from 'react';
import ReactDOM from 'react-dom'
import '../scss/<%= pageName %>.scss';
import <%= classedName %>App from ('../components/<%= pageName %>/app.js');

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/purchase/onlinepurchase';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <<%= classedName %>App />
    </Provider>,
    document.getElementById('container')
);

window.__WPO.setConfig({
    sample: 1 // 全部上报
});

//自定义测速上报
window.onload = function () {
    window.__WPO.speed(0, g_mstart.getTime() - g_start.getTime());  //样式，框架耗时
    window.__WPO.speed(1, g_mend.getTime() - g_mstart.getTime());   //模块加载耗时
    window.__WPO.speed(2, new Date().getTime() - g_mend.getTime()); //页面执行耗时
};
