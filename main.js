class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.courses = [];
    }
  
    addCourse(course) {
      if (!course) return null;
      this.courses.unshift(course);
      return course;
    }
  
    removeCourse(courseName) {
      const index = this.courses.findIndex(course => course.name === courseName);
      if (index === -1) return -1;
      this.courses.splice(index, 1);
      return index;
    }
  
    getStudentInfo() {
      const averageGrade = this.getAverageGrade();
      return {
        name: this.name,
        age: this.age,
        courses: this.courses,
        averageGrade: averageGrade
      };
    }
  
    isEnrolled(courseName) {
      return this.courses.some(course => course.name === courseName);
    }
  
    listAllCourses() {
      return this.courses.map(course => `${course.name}: ${course.grade}`);
    }
  
    getHonorClass() {
      const averageGrade = this.getAverageGrade();
      if (averageGrade >= 3.9) return "Summa Cum Laude";
      else if (averageGrade >= 3.7 && averageGrade <= 3.89) return "Magna Cum Laude";
      else if (averageGrade >= 3.5 && averageGrade <= 3.69) return "Cum Laude";
      else if (averageGrade >= 3.0 && averageGrade <= 3.49) return "Honorable Mention";
      else return "No honors";
    }
  
    getAverageGrade() {
      const gradeValues = {
        "A": 4,
        "B+": 3.5,
        "B": 3,
        "C+": 2.5,
        "C": 2,
        "D+": 1.5,
        "D": 1,
        "F": 0
      };
      const totalGradeValue = this.courses.reduce((total, course) => {
        const gradeValue = gradeValues[course.grade];
        return gradeValue ? total + gradeValue : total;
      }, 0);
      return totalGradeValue / this.courses.length;
    }
  }
  
  // Creating a new Student object for stu
  let stu = new Student("Scott", 17);
  
  // Adding courses to stu's record
  stu.addCourse({"name": "Math", "grade": "A"});
  stu.addCourse({"name": "Programming", "grade": "B+"});
  stu.addCourse({"name": "Network", "grade": "B+"});
  stu.addCourse({"name": "GenEd", "grade": "D"});
  
  //Average Grade
  console.log(stu.getAverageGrade());
  
  // Listing all courses
  console.log(stu.listAllCourses());
  
  // Removing "GenEd" course
  console.log(stu.removeCourse("GenEd"));
  
  // Attempting to remove a non-existent course "History"
  console.log(stu.removeCourse("History"));
  
  // Checking enrollment in "Programming" and "History"
  console.log(stu.isEnrolled("Programming"));
  console.log(stu.isEnrolled("History"));
  
  // Getting student info after updates
  console.log(stu.getStudentInfo());
  
  // Determining honor class after updates
  console.log(stu.getHonorClass());
  