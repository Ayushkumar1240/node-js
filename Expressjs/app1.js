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

// app.get('/courses/:id',(req,res)=>{
//     console.log(req.params);
//     res.send(`User id is ${req.params.id}`);
// })

// app.listen(port,()=>{
//     console.log(`Server is running at port ${port}`);
// })



//  Multiple Route Parameters

const courses=[
    {id:1, name:'javascript'},
    {id:2, name:'nodejs'},
    {id:3, name:'expressjs'},
    {id:4, name:'mongodb'}
]

// app.get('/courses/:id',(req,res)=>{
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) res.status(404).send('The course with given id is not found');
//     res.send(course);
// })

app.get('/courses/:coursename',(req,res)=>{
    const course=courses.find(c=>c.name===req.params.coursename);
    if(!course) res.status(404).send('The course with given name is not found');
    res.send(course);
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})