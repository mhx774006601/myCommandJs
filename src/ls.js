const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');

// console.log(chalk.bgGreen.yellow('hello world'))

program
.arguments('<dirname>')
.option('-l,--list')
.action(function(dirname){
    // console.log('带了参数'+dirname)
    let files = fs.readdirSync(dirname);
    // console.log(files)
    // console.log(this.list)

    
    if(this.list){
        //控制台中执行命令node ls -l
        let str = '';
        files.forEach(file => {

            //获取文件信息
            let f = fs.statSync(dirname + '/' +file)
            //是否是文件夹
            if(f.isDirectory()){
                str +=  chalk.yellow(file) + '\r\n'
            }else{
                str +=  file + '\r\n'
            }

           
        });
        console.log(str)
    }else{
        //控制台中执行命令node ls 
        console.log(files)
    }
})

// console.log(__dirname);
// let files = fs.readdirSync(__dirname);
// console.log(files)

process.argv.push(__dirname)

program.parse(process.argv)