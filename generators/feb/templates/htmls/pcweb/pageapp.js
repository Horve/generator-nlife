/**
 * @jsdoc function
 * @name <%= appname %>.page:<%= pageName %>
 * @description
 * # <%= classedName %>
 * page of the <%= appname %>
 * `<<%= classedName %>App/>` main file
 */

import React from 'react';
import { Card } from 'antd';
import Footer from '../common/nl_footer.js'
import Sidebar from '../common/nl_sidebar.js';
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
            <div id="nlife">
                <Sidebar type='my_retailer'/>
                <div className="content">
                    <Card bordered={false} title="我的零售商" extra={extra}>

                    </Card>
                    <Footer />
                </div>
                <div className="card-sep"></div>
            </div>
        )
    }

};
