const course = {
  coursename: "js in hindi",
  price: "1000",
  courseInstructor: "Hitesh",
};

// course.courseInstructor
//  const {courseInstructor}=course//by using this syntax you deoen't need to write whole statement again and again
//  console.log(courseInstructor);
const { courseInstructor: instructor } = course; //this is called destructuring
console.log(instructor);

// const navbar={{company}}=>{

// }
// navbar(company="Hitesh")

// {//json format 
//     name:"Hitesh",
//     coursename:"js in hindi", 
//     "price":"free"
// }

// [//json format
//     {},
//     {},
//     {}
// ]

