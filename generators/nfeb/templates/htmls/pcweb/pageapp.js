/**
 * @jsdoc function
 * @name <%= appname %>.page:<%= pageName %>
 * @description
 * # <%= classedName %>
 * page of the <%= appname %>
 * `<<%= classedName %>App/>` main file
 */

import React from 'react';
import NLDownload from '../common/nl_download.js';
import NLDownloadType from '../../../../global_define/download_type.js';

class <%= classedName %>App extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = { };
  }

  contextSetPageTitle() {
    let me = this;
    let { props } = me;

    me.context.setPageTitleBar && me.context.setPageTitleBar({
      title: '',
      extra: null,
      type: '',
      bordered: false,
      isThemeSwitchVisible: false,
      isUserInfoVisible: true,
      pageName: '<%= pageName %>'
    });
  }

  componentDidMount() {
    this.contextSetPageTitle();
  }

  render() {
    return <div></div>;
  }
};

<%= classedName %>App.contextTypes = {
  setPageTitleBar: React.PropTypes.func
};

export default <%= classedName %>App;