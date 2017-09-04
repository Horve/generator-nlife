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

export default module.exports = class <%= classedName %>App extends React.Component {

    static propTypes = {
    }

    static defaultProps = {
    }

    constructor (props) {
        super (props);
        this.state = {
        };
    }

    /**
     * 首次渲染之前干的事情
     * @return {[type]} [description]
     */
    componentWillMount () {

    }

    renderTitle() {
        let title = '发起线上采购';

        return title;
    }

    /**
     * 组件渲染
     * @return {[type]} [description]
     */
    render () {
        let me = this;
        let { props } = me;
        let { dispatch, BlockStatistic } = props;
        let extra = (
                <div className="more-function">
                    <NLDownload generateDownloadParam={{}} taskType={NLDownloadType.my_inventory}
                                disabled={false}/>
                    <span className="sep-line"></span>
                    <a href="../retail/nlife_faq.html?q=my_inventory" target="_blank">帮助</a>
                    <button id="nl-theme-sw" title="点击切换主题" onClick={this.switchTheme}>{window.defaultThemeText}</button>
                </div>
        );

        return (
            <NlifeRootView>
                <SidebarCommon type=''></SidebarCommon>
                <NLCard
                    bordered={false}
                    title={this.renderTitle()}
                    extra={extra}
                    isThemeSwitchVisible={false}
                    isUserInfoVisible={true}
                    >

                </NLCard>
            </NlifeRootView>
        )
    }

};
