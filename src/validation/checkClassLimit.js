 module.exports = (course)=>{
   

    // multiple condition for make sure that class capacity is not overflow
    if (course.courseNo == "C1" && course.maxNoOfStudents > 25) {
        return({ message: "This classroom contains only 25 students" });
      } else if (course.courseNo == "C2" && course.maxNoOfStudents > 35) {
        return({ message: "This classroom contains only 35 students" });
      } else if (course.courseNo == "C3" && course.maxNoOfStudents > 35) {
        return({ message: "This classroom contains only 35 students" });
      } else if (course.courseNo == "C4" && course.maxNoOfStudents > 30) {
        return({ message: "This classroom contains only 30 students" });
      } else if (course.courseNo == "C5" && course.maxNoOfStudents > 35) {
        return({ message: "This classroom contains only 35 students" });
      } else if (course.courseNo == "C6" && course.maxNoOfStudents > 45) {
        return({ message: "This classroom contains only 45 students" });
      } else if (course.courseNo == "C7" && course.maxNoOfStudents > 45) {
        return({ message: "This classroom contains only 45 students" });
      } 

   return "true"
};

