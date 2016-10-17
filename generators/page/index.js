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
      name: 'pageName',
      message: '请输入新页面名称:'
    }, {
      type: 'confirm',
      name: 'isCreateNewPage',
      message: '确定要创建新页面(y/n)?',
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

    /*
    console.log(this.destinationPath());
    console.log(this.destinationRoot());
    console.log(this.basePath);
    console.log(this.templatePath());
    */
  },

  writing: function () {
    this.log('INFO: 正在执行创建...');
    this.log('INFO: 创建完成!');
    var app   = _.template(this.fs.read(this.templatePath('./htmls/pcweb/pageapp.js')));
    var entry = _.template(this.fs.read(this.templatePath('./htmls/pcweb/page.js')));
    var scss  = _.template(this.fs.read(this.templatePath('./htmls/pcweb/page.scss')));

    this.fs.write(this.destinationPath('./components/' + this.props.pageName + '/app.js'), app({
      appname: this.props.pageName,
      pageName: this.props.pageName,
      classedName: this.props.pageName
    }));
    this.fs.write(this.destinationPath('./pages/' + this.props.pageName + '.js'), entry({
      appname: this.props.pageName,
      pageName: this.props.pageName,
      classedName: this.props.pageName
    }));
    this.fs.write(this.destinationPath('./scss/' + this.props.pageName + '.scss'), scss());
  },

  install: function () {
    //this.installDependencies();
  }
});
