// responsive menu

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// course list

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            ' CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            ' CSS',
            ' JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            ' CSS',
            ' JavaScript'
        ],
        completed: false
    }
]

let buttonText = ''
function createCourseCard(coursefilter) {
    const coursecard = document.getElementById('coursecard');
    coursecard.innerHTML = '';
    coursefilter.forEach(function (course) {
        if (course.completed === true) {
            coursecard.innerHTML +=
                `<div class="course">
                <h3>${course.subject} ${course.number}</h3>
                </div>`
        } else {
            coursecard.innerHTML +=
                `<div class="course-false">
                <h3>${course.subject} ${course.number}</h3>
                </div>`;
        }
    });
}

coursecard.innerHTML = buttonText;


// function createCreditStatement(coursefilter) {
//     const creditstatement = document.getElementById('creditstatement');
//     creditstatement.innerHTML = '';
//     coursefilter.forEach(function (course) {
//             creditstatement.innerHTML +=
//             let creditSum;
//             creditSum += course.credits;
//             `<p>The total number of credits is ${creditSum}</p>`;
//         });
//     }

createCourseCard(courses);

const cse = document.querySelector("#cse")
cse.addEventListener("click", () => {
    const csecourse = courses.filter(course => course.subject == "CSE");
    createCourseCard(csecourse);
});


const wdd = document.querySelector("#wdd")
wdd.addEventListener("click", () => {
    const wddcourse = courses.filter(course => course.subject == "WDD");
    createCourseCard(wddcourse);
});

const all = document.querySelector("#all")
all.addEventListener("click", () => {
    createCourseCard(courses);
});

// fetch json data
// async function getCourses(jsonFile) {
//     try {
//         const response = await fetch(jsonFile)
//         // wait for response
//         if (response.ok) {
//             // wait for json
//             const data = await response.json();
//             console.log(data)
//             displayCourses(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//             console.log("Error retreiving data", error);
//         }
// }

function displayModal(courses) {
    courses.forEach(course =>  {
        courseModal.innerHTML = ''     
        courseModal.innerHTML =
        `<div class="courseModal">
        <h3>${course.subject} ${course.number}</h3>
        <h4>${course.title}</h4>
        <p>Credits: ${course.credits}</p>
        <p>Certificate: ${course.certificate}</p>
        <p>${course.description}</p>
        <p>Technology: ${course.technology}</p>
        </div>`
        }
    );
}

// modal
const dialog = document.querySelector("dialog");
const show = document.querySelector("#coursecard");
const close = document.querySelector("#closebutton");

// "Show the dialog" button opens the dialog modally
show.addEventListener("click", () => {
  dialog.showModal();
  displayModal(courses);
});

// "Close" button closes the dialog
close.addEventListener("click", () => {
  dialog.close();
});

// copyright year
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

// set last modified date options
const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
};

// create last modified date variable
lastModified.innerHTML = new Date().toLocaleDateString("en-US", options);