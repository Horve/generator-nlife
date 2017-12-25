'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-nlife') + ' generator!'
    ));

    var prompts = [{
      type: 'inut',
      name: 'projName',
      message: '请输入新页面所属项目I(如：purchase):'
    }, {
      type: 'inut',
      name: 'pageName',
      message: '请输入新页面名称II(如：nlife_onlinepurchase):'
    }, {
      type: 'confirm',
      name: 'isCreateNewPage',
      message: '确定要创建新页面III(y/n)?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  defaults: function () {
    this.basePath = path.join(this.destinationRoot(), './app/front_ent/app/');
    this.projName = path.basename(this.destinationRoot());

    if (this.projName.indexOf('nlife') < 0 && this.projName.indexOf('feb') < 0) {
      this.log(chalk.yellow('WARN:') + ' 请确认是在nlife-feb工程根目录下执行当前命令!');
    }
  },

  writing: function () {
    this.log('INFO: 正在执行创建...');
    this.log('INFO: 创建完成!');
    var app = _.template(this.fs.read(this.templatePath('./htmls/pcweb/pageapp.js')));
    var entry = _.template(this.fs.read(this.templatePath('./htmls/pcweb/page.js')));
    var scss = _.template(this.fs.read(this.templatePath('./htmls/pcweb/page.scss')));
    // var html = _.template(this.fs.read(this.templatePath('./htmls/pcweb/page.html')));
    var name = this.props.pageName.substring(0, 1).toUpperCase() + this.props.pageName.substring(1);

    this.fs.write(this.destinationPath('./app/front_end/app/components/' + this.props.pageName + '/app.js'), app({
      projName: this.props.projName,
      appname: this.props.pageName,
      pageName: this.props.pageName,
      classedName: name
    }));
    this.fs.write(this.destinationPath('./app/front_end/app/pages/' + this.props.pageName + '.js'), entry({
      projName: this.props.projName,
      appname: this.props.pageName,
      pageName: this.props.pageName,
      classedName: name
    }));
    this.fs.write(this.destinationPath('./app/front_end/app/scss/' + this.props.pageName + '.scss'), scss({
      pageName: this.props.pageName,
      classedName: this.props.pageName
    }));
    // this.fs.write(this.destinationPath('./htmls/' + this.props.pageName + '.html'), html({
    //   pageName: this.props.pageName
    // }));
  },

  install: function () {
    //this.installDependencies();
  }
});
