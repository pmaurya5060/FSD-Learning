const http=require('http');
const multer  = require('multer')

const myserver=http.createServer((req,res)=>{
    // console.log('server1');
    // res.end('Hi, this is my first server');
    if(req.url=='/'){
        res.end("ABES Engineering College")
    }
    if(req.url=='/about'){
        res.end("I am a student of IT")
    }
    if(req.url=='/Contact'){
        res.end("9058860864")
    }
    if(req.url=='/about'){
        res.end("I am a student of IT")
    }

    else{
        res.end("404 Page not found")
    }
});

myserver.listen(8000,()=>{console.log('server is running');
})

const fs=require('fs')
// fs.writeFileSync("./it-a.txt","we are students of it-a")
// const result=fs.readFileSync("./it-a.txt","utf-8")
// console.log(result);

// fs.writeFile("./ad.txt","coding is a very good time pass",()=>{});
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./ad.txt",'and i am happy',(err)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log("File append successfully")
//     }
// });

fs.cp("a1.txt", "b1.txt", (err) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("File copied successfully");
    }
});

