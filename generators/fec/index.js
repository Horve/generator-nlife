'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = yeoman.Base.extend({

  isOk: true,
  fileExists: true,
  routeExists: false,
  pageType: null,

  prompting: function () {
    //var done = this.async();

    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-nlife') + ' generator!'
    ));

    this.log(chalk.yellow('注意::') + '页面名称格式为 xxx-xxx ,否则将无法创建!');

    var prompts = [{
      type: 'inut',
      name: 'pageName',
      message: '1, 请输入新页面名称:'
    }, {
      type: 'list',
      name: 'pageType',
      message: '2, 选择页面类型:',
      choices: ['H5页面', 'PC页面']
    }, {
      type: 'confirm',
      name: 'isCreateNewPage',
      message: '3, 确定要创建新页面(y/n)?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.pageType = this.props.pageType == 'H5页面' ? 1 : 2;
      if (!/.*\-.*/.test(this.props.pageName)) {
        this.isOk = false;
        if (!this.isOk) {
          this.log('\n' + chalk.red('ERROR!!') + '输入的页面名称不合法!\n');
          return;
        }
      }
    }.bind(this));
  },

  defaults: function () {
    //if (!this.isOk) return;

    console.log('aaaaaaaaa');
    console.log(this.props.pageType);

    this.basePath = path.join(this.destinationRoot(), './app/front_ent/');
    this.projName = path.basename(this.destinationRoot());

    if (this.projName.indexOf('nlife') < 0 && this.projName.indexOf('fec') < 0) {
      this.log(chalk.yellow('WARN') + ': 请确认是在nlife-fec工程根目录下执行当前命令!');
    }

    //console.log(this.projName);          // generator-nlife
    //console.log(this.destinationPath()); // /Users/zhengshun/alibaba/yeoman/generator-nlife
    //console.log(this.destinationRoot()); // /Users/zhengshun/alibaba/yeoman/generator-nlife
    //console.log(this.basePath);          // /Users/zhengshun/alibaba/yeoman/generator-nlife/app/front_ent/
    //console.log(this.templatePath());    // /Users/zhengshun/alibaba/yeoman/generator-nlife/generators/fec/templates
  },

  writing: function () {

    if (!this.isOk) return;

    this.log(chalk.green('INFO') + ': 正在执行创建...');
    this.log(chalk.green('INFO') + ': 创建完成!');

    var me     = this;
    var webPath= (this.pageType == 1 ? 'mobile' : 'pcweb');
    var page   = _.template(this.fs.read(this.templatePath('./htmls/' + webPath + '/page.js')));
    var entry  = _.template(this.fs.read(this.templatePath('./htmls/' + webPath + '/entry.js')));
    var scss   = _.template(this.fs.read(this.templatePath('./htmls/' + webPath + '/page.scss')));
    var pgName = this.props.pageName;
    var name   = pgName.substring(0,1).toUpperCase() + pgName.substring(1).replace('-','');
    var route  = this.fs.read(this.templatePath('./htmls/pcweb/router.txt'));
    var resArr = []; //插入新路由后的数组
    var exportLineNum = 0; //module.exports所在的行数

    this.fileExists = this.fs.exists(this.destinationPath('./app/front_end/router.js'));
    if (!this.fileExists) {
      this.log(chalk.red('ERROR!!') + this.destinationPath('./app/front_end/router.js') + '文件不存在!');
      return;
    }

    var routes = this.fs.read(this.destinationPath('./app/front_end/router.js'), 'utf-8').split('\n');

    [].forEach.call(routes, function(line, index) {
      if (line.indexOf(pgName) > -1) {
        me.routeExists = true;
      }
      if (line.trim().indexOf('module') == 0) {
        exportLineNum = index;
      }
    });

    if (this.routeExists) {
      this.log(chalk.red('ERROR!!') + '< ' + pgName + ' >页面路由已经存在');
      return;
    }

    resArr = [].concat(
      routes
        .slice(0, exportLineNum),
      route
        .replace(/\$\{projName\}/g, pgName.split('-')[0])
        .replace(/\$\{pageName\}/g, pgName.split('-')[1]),
      routes
        .slice(exportLineNum)
    );

    this.fs.write(this.destinationPath('./app/front_end/router.js'), resArr.join('\n'));

    this.fs.write(this.destinationPath('./app/front_end/pages/' + pgName.split('-')[0] + '/' +  pgName.split('-')[1] + '.js'), page({
      classedName: name,
      pageName: pgName
    }));
    this.fs.write(this.destinationPath('./app/front_end/pages/' + pgName.split('-')[0] + '/' +  pgName.split('-')[1] + '.scss'), scss({
      pageName: pgName
    }));
    this.fs.write(this.destinationPath('./app/front_end/entries/' + pgName + '.js'), entry({
      pageName: pgName.split('-')[0] + '/' +  pgName.split('-')[1]
    }));

  },

  install: function () {
    //this.installDependencies();
  },

  end: function () {
    this.log('操作已结束,如果终端未退出,请使用 ctrl+c 退出终端!');
  }
});
