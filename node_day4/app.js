let express=require('express');
let multer=require('multer')
let app=express();
let fs=require('fs');
const path=require('path');
const { parse } = require('path');

app.listen(1122,console.log("启动服务"));

let objMulter=multer({dest:'./public/upload'})
app.use(objMulter.any());



// let str1='~public\\upload\\a37fc3aa270700ecbd858d8fc7485c02.png'
// let str2='c:/sss/\aa//d.ff'
// let str3=''
// let str4=''

// console.log(path.parse(str1));
// console.log(path.parse(str2));
// console.log(path.join(str1,str2,str3))
// console.log(path.resolve(str2))

app.get('/upload',(req,res,next)=>{
    try {
        for(i=0;i<req.files.length;i++){
             let oldname=req.files[i].path;
            // console.log(req.files[i].originalname)
             let newname=oldname+path.parse(req.files[i].originalname).ext;
           // console.log(oldname,newname);
             fs.renameSync(oldname,newname);
            console.log(req);
             res.send({err:0,url:""})
        }
       
       // console.log(req.files); 
    } catch (error) {
        console.log(error)
    }
    
})