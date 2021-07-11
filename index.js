const { Console } = require('console');
const http=require('http');
const path=require('path');
const fs=require('fs');


const server=http.createServer((req,res,err)=>{
    

    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
            
        fs.readFile(path.join(__dirname,'index.htm'),(err,content)=>{
            if(err) throw err
      
            res.end(content);
           
        });
        
        
    }else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
            
        fs.readFile(path.join(__dirname,'about.htm'),(err,content)=>{
            if(err) throw err
            
            res.end(content);
           
        });
        
    }else{
        const books=[
            {name:'Tohir Malik',pages:350},
            {name:'Hamet Olimjon',pages:100},
            {name:'Robert Kiyosaki',pages:150}
        ]
        res.end(JSON.stringify(books))
    }
});
const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>console.log(`Server ${PORT} portda ishga tushdi`));