/**
 * @jsdoc function
 * @name <%= appname %>.page:<%= pageName %>
 * @description
 * # <%= classedName %>
 * page of the <%= appname %>
 * `<<%= classedName %>App/>` main file
 */

import React from 'react';
import NlifeRootView from '../common/frame/nl_root_view';
import SidebarCommon from '../common/nl_sidebar_common';
import NLCard from '../common/nl_card_n.js';
import NLDownload from '../common/nl_download.js';
import NLDownloadType from '../../../../global_define/download_type.js';

class <%= classedName %>App extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
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
      pageName: '<%= classedName %>'
    });
  }

  componentDidMount() {

  }

  render() {
    let me = this;
    let { props } = me;
    let { dispatch } = props;

    return (
      <div>
      </div>
    )
  }

};

<%= classedName %>App.contextTypes = {
  setPageTitleBar: React.PropTypes.func
};

exports default <%= classedName %>App;