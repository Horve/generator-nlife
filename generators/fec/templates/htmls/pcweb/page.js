/**
 * @jsdoc function
 * @createDate <%= pageName %>
 * @name <%= pageName %>
 * @description
 * page of the <%= classedName %>
 */

import React, {Component} from 'react'
import Helmet from 'react-helmet'

export default module.exports = class <%= classedName %> extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="<%= pageName %>-wrapper">
        <Helmet title="<%= classedName %>-替换标题"/>
        <a>测试页面:<%= pageName %></a>
      </div>
    )
  }
}
