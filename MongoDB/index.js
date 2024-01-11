const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testDatabase')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));



//schema

const courseSchema=new mongoose.Schema({
    name:String,
    creator:String,
    publishDate:{type:Date,default:Date.now},
    isPublished:Boolean,
    rating:Number
})

//model
const Course=mongoose.model('Course',courseSchema);

//create
async function createCourse(){
    const course=new Course({
        name:'Ruby',
        creator:'Abc',
        isPublished:false,
        rating:3
    });
    const result=await course.save();
    console.log(result);
}

//read
//createCourse();



// query for document

// async function getCourses(){
//     //const courses=await Course.find({creator:'Ayush'})
//     //const courses=await Course.find({creator:'Ayush'}).select({name:1});
//     //const courses=await Course.find({creator:'Ayush'}).select({name:1,isPublished:1});
//     const courses=await Course.find({creator:'Ayush'}).select({name:1,isPublished:1}).sort({name:1});
//     console.log(courses);
// }
// getCourses();



//comparison query operator

//eq(equal)
//ne(not equal)
//gt(greater than)
//gte(greater than or equal to)
//lt(less than)
//lte(less than or equal to)
//in
//nin(not in)


async function getCourses(){
    const courses=await Course.find({rating:{$gte:4}});
    //const courses=await Course.find({rating:{$in:[4,5]}}).sort({name:1});
    console.log(courses);
}

//getCourses();


//logical query operator

//or
//and   

async function getCourses(){
    const courses=await Course.find({rating :{$in:[3,4.8,4.9]}})
    .select({name:1})
    .or([{creator:'Ayush'},{rating:2}]);
    console.log(courses);
}

//getCourses();



// update document

async function updateCourse(id){
    const course=await Course.findById(id);
    if(!course) return;
    course.name='Nodejs';
    course.creator='Steve';

    const result=await course.save();
    console.log(result);
}

//updateCourse('65a02749c3a903c1c2b9dbe2')


// Delete document

async function removeCourse(id){
    // let course=await Course.findByIdAndRemove(id);
    let course=await Course.findByIdAndDelete(id);
    console.log(course);
}

//removeCourse('65a02749c3a903c1c2b9dbe2');