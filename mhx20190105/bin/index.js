#!/usr/bin/env node    //帮助在全局生成一个cmd 或者ssh的一个文件

const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');

program
.command('create <project_app>')
.description('创建项目')
.action(function(project_app){
   
   let projectPath = __dirname + '/'+project_app

   if(fs.existsSync(projectPath)){
       console.log(chalk.red(`项目: ${project_app}已经存在了`));
       return;
   }
   console.log(chalk.yellow(`即将创建项目：${project_app}`));
   fs.mkdirSync(projectPath);
   console.log(chalk.green('项目目录创建成功'))
   fs.writeFileSync(projectPath+'/index.html');
   console.log(chalk.green('项目首页创建成功'))
   fs.mkdirSync(projectPath+'/css');
   console.log(chalk.green('项目css创建成功'))
   fs.mkdirSync(projectPath+'/js');
   console.log(chalk.green('项目js创建成功'))
   fs.mkdirSync(projectPath+'/image');
   console.log(chalk.green('项目image文件夹创建成功'))
   console.log(chalk.green('项目构建完成'))

})

program.parse(process.argv)