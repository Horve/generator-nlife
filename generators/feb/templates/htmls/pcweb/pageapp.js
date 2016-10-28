/**
 * @jsdoc function
 * @name <%= appname %>.page:<%= pageName %>
 * @description
 * # <%= classedName %>
 * page of the <%= appname %>
 * `<<%= classedName %>App/>` main file
 */

import React from 'react';
var Header = require('../common/n_header.js');
var Footer = require('../common/n_footer.js');
var Sidebar = require('../common/n_sidebar.js');

export default module.exports = class <%= classedName %>App extends React.Component {

    static propTypes = {
        breadcrumb : React.PropTypes.object
    }

    static defaultProps = {
        breadcrumb : [ //面包屑配置
            {'text': '首页'}, {'text': '我的页面'}
        ]
    }

    constructor (props) {
        super (props);
        this.state = {
            sidebarClose: false,
            selectedDate: 'no',
        };
    }

    /**
     * 首次渲染之前干的事情
     * @return {[type]} [description]
     */
    componentWillMount () {

    }

    /**
     * 设置sidebar状态
     * @param {[type]} sdClosed [description]
     */
    setStateChange (sdClosed){
        this.setState({
            sidebarClose : sdClosed
        });
    }

    /**
     * 组件渲染
     * @return {[type]} [description]
     */
    render () {
        return (
            <div className="container-fluid">
                <Header onStateChange={this.setStateChange} breadcrumb={this.props.breadcrumb} />
                <div className="container-con">
                    <Sidebar sidebarClose={this.state.sidebarClose} />
                    <div id="main" className={this.state.sidebarClose ? 'sidebarClose' : ''}></div>
                </div>
                <Footer sidebarClose={this.state.sidebarClose} />
            </div>
        )
    }

};
