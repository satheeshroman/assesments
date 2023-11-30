let http=require('http');



let notes=[
    {
        id :1,
        content:'backend uoing node',
        important:true
    },
    {
        id:2,
        content:'nodejs is open source',
        important:false
    },
    {
         id:3,
        content:'simple using web server in nodejs',
        important:false
    }
];

const app =http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('Content-Type','application/json');
     response.end(JSON.stringify(notes));
 } );

   const PORT=3001;
   app.listen(PORT, ()=>{
     console.log('Server running on port ${3001}');
   })
