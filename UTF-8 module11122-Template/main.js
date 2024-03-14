//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500015       Name:Chanapon Auafaur

class Student {
    // Insert your code here
    constructor(name, age) {
        this.name = name
        this.age = age
        this.courses = []
    }

    addCourse(course) {
        return this.courses.push(course)

    }
    removeCourse(courseName) {
        const foundCourseIndex = this.findCourseName(courseName)
        this.courses.splice(foundCourseIndex, 1)

    }
    findCourseName(courseName) {//เขียนมาเพิ่มครับ
        return this.courses.findIndex((course) => course.courseName === courseName)
    }
    getStudentInfo() {
        return this.name, this.age, this.courses
    }
    getAverageGrade() {
        if (this.grade === 'A') {
            return 4
        }
        if (this.grade === 'B+') {
            return 3.5
        }
        if (this.grade === 'B') {
            return 3
        }
        if (this.grade === 'C+') {
            return 2.5
        }
        if (this.grade === 'C') {
            return 2
        }
        if (this.grade === 'D+') {
            return 1.5
        }
        if (this.grade === 'D') {
            return 1
        }
        if (this.grade === 'F') {
            return 1
        }
        else return undefined
    }
    istAllCourses() {
        return this.courses
    }
}

// Creating a new Student object for stu
let stu = new Student("Scott", 17);

// Adding courses to stu's record
stu.addCourse({ "name": "Math", "grade": "A" });
stu.addCourse({ "name": "Programming", "grade": "B+" });
stu.addCourse({ "name": "Network", "grade": "B+" });
stu.addCourse({ "name": "GenEd", "grade": "D" });

//Average Grade
console.log(stu.getAverageGrade());

// Listing all courses
console.log(stu.listAllCourses());

// Removing "GenEd" course
console.log(stu.removeCourse("GenEd"));

// // Attempting to remove a non-existent course "History"
// console.log(stu.removeCourse("History"));

// // Checking enrollment in "Programming" and "History"
// console.log(stu.isEnrolled("Programming"));
// console.log(stu.isEnrolled("History"));

// Getting student info after updates
console.log(stu.getStudentInfo());

// // Determining honor class after updates
// console.log(stu.getHonorClass());
