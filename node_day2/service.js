let http=require('http');
let url=require('url');
let querysting=require('querystring');

let service=http.createServer((req,res)=>{

    if(req.url.includes('/api')){
        let path=url.parse(req.url,true).query;
        console.log("url",path);
        let str='';
        req.on('data',(chunk)=>{
            console.log(chunk);
            str+=chunk;
        })
        

        req.on('end',()=>{
            console.log("aa");
        })

        res.write('ok')
        res.end();
        
        

    }else{

    }
})

service.listen(7755,console.log("开启服务"));