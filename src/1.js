//通过node来执行
const program = require('commander');


program
//设置当前脚本的版本信息,会自动的给当前命令添中一个-v ,--version的选项
.version('1.0.0','-v,--version')
//设置使用说明
.usage('我是说明书')
//配置命令参数
//.arguments('<v>')   //<v>代表形参，是必传的；[v]代表形参，可选的。
//设置option选项
.option('-a,--all','查看所有内容',function(){
    //调用该option处理的事情
    // console.log('使用了　-a')
})  // 写法有三种：1. -v,--version　2. -v | --version  3.-v --version
.option('-n,--number <v1>','传入的一个数字',function(a){
    console.log('你传入的是：'+ a);
})
;
program
.command('create <project_name>')
.description('创建新的应用')
.usage('我是create 的说明书')
.action(function(a){
    console.log('创建新应用:　'+a)
})
;

// console.log('hello')
// console.log(process.argv)
//解析当前命令行中的数据
program.parse(process.argv)