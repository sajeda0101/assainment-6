const express=require('express')
const app =express();
const cors=require('cors')
const port=process.env.PORT|| 5000;

app.use(cors());
const courses=require('./data/courses.json');
const courseInfo=require('./data/coureseInfo.json')

app.get('/',(req,res)=>{
    res.send('couses running')
})
app.get('/courses-categories',(req,res)=>{
    res.send(courses)
})
app.get('/course/:id',(req,res)=>{
    const id=req.params.id;
    const courseItem=courseInfo.filter(course=>course._id===id)
    res.send(courseItem)
})
app.get('/courses/:id',(req,res)=>{
    const id=req.params.id;
    const courses=courseInfo.find(c=>c.courses_id===id)
    res.send(courses)
})

// app.get('/courseinfo/:id',(req,res)=>{
//     const id=req.params.id;
//    const selectCourse=courseInfo.find(course=>course._id===id)
//    res.send(selectCourse)
   
// })
app.listen(port,()=>{
    console.log('couses info',port)
})