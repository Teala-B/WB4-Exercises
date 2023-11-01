let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git", Location: "Classroom 7",
    StartDate: "09/08/22", Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript", Location: "Classroom 9",
    StartDate: "11/22/22", Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java", Location: "Classroom 1", StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases", Location: "Classroom 7",
    StartDate: "03/16/23", Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular", Location: "Classroom 1", StartDate: "04/25/23",
    Fee: "50.00",
    }
];

// When does the PROG200 course start?



function courseStart(courses, Courseid) {
    // 1. define the container
let startdate = [];


    // 2. filter out all items not in the category
    //      loop and add matches to the new array
    for(let i = 0; i < courses.length; i++) {
        // const courses = courses[i];

        if(courses[i].CourseId == Courseid) {
            startdate.push(courses[i].startDate);
            // console.log(courses[i].startDate)
        }
        
    }

    // 3.
    return startdate;
}

// function displayCourseStart() {
//     for(let i = 0; i < courses.length; i++) {
//         console.log(courses[i].item);
//     }

// }
// const course = displayCourseStart(courses, "PROG200");
let date=courseStart(courses,"PROG200");
console.log(date)

// displayCourseStart(courses)













// let index = courses.indexOf("PROG200")
// let time = 

// console.log(index);


// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?