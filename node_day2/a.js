//1.引入http模块    
let http = require('http')
 
 
//2. 创建web服务   返回http对象(server)
let server = http.createServer((req,res)=>{
   
  // console.log('一旦有人访问我,回调就会调用')
  // console.log(req.url);//提取地址栏地址数据
 
  //抓取非地址栏数据
 
  let str = '';
  req.on('data',(chunk)=>{
    //非地址栏数据大，每次回来一片,chunk=片
    console.log('chunk',chunk);
    
    str += chunk;
    console.log('str',str)
  })
 
  req.on('end',()=>{
    //最后一片数据回来后触发一次
    console.log('非地址栏数据',str)
  })
 
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//响应头设置
  res.write('返回的数据')
  res.end();//结束响应 必须
 
});
 
 
//3. 监听服务器
// server.listen(端口，[主机名]，[成功后的就回调])
server.listen(9001,'127.0.0.1',()=>{
  console.log('server is runing........')
})