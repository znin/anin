let http =require('http');
let fs=require('fs');

let service=http.createServer((req,res)=>{
    console.log(req.url);
    //fs.readFile('路径'，[编码]，回调)
    // fs.readFile('./index.html',(err,data)=>{
    //     console.log(data);
    // });

if(false){

}else{
    let url=req.url==='/' ? 'index.html':req.url;
    try {
        let html=fs.readFileSync('.'+url);
        res.write(html);
        res.end();
    } catch (error) {
        let data=fs.readFileSync('./404.html');
        res.write(data);
        res.end();
    }

}


   
    


})

service.listen(7755,console.log("启动服务"));