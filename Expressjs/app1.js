const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello Ayush");
})

app.get('/about',(req,res)=>{
    res.send("Hello Ayush, this is about page");
})

app.get('/contact',(req,res)=>{
    res.send("Hello Ayush, this is contact page");
})


const port=process.env.PORT || 4000;


//ROUTE PARAMETERS

app.get('/courses/:id',(req,res)=>{
    console.log(req.params);
    res.send(`User id is ${req.params.id}`);
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
