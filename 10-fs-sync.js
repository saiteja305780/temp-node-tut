/* GLOBALS - NO WINDOW !!

 __dirname  - path to current directory

 __filename - filename

 require  - functio to use modules (Common js)

 module - info about current module

 process -  info about env where the program is being executed
 
 modules



 const path = require('path');
console.log(path.sep);
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
*/
const {readFile,writeFile} = require('fs');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first =  result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});