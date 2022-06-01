module.exports = (instructor, meetingTime, instructorData) => {
    //loop through the previous data to check availability of instructor
  for (let i = 0; i < instructorData.length; i++) {
      //comparing the curreny instructor name with previous data
    if (
      instructor.instructorName == instructorData[i].instructor.instructorName
    ) {
      let flag = true;
      //loop through the meetimg days to make sure that they dont overlap
      for (
        let j = 0;
        j < instructorData[i].meetingTime.meetingDays.length;
        j++
      ) {

        if (
          meetingTime.meetingDays[j] !=
          instructorData[i].meetingTime.meetingDays[j]
        ) {
          flag = false;
          break;
        } 
      
      }
      // if all days are same then we have to check start time and end time
      if (flag == true) {
           // extracting start time from current data and converting into number
          let start = Number(meetingTime.meetingStart.split(":").join(""));
          
          // extracting end time from previous data and converting into number
          let end = Number(
              instructorData[i].meetingTime.meetingEnd.split(":").join("")
              );
            
              
              //comparing both time slots to make sure that they dont overlap
        if (start < end) {
          return {
            message:
              "Professor already booked on that time slot please shedule another time slot",
          };
        } 
         //fixing break after every class
        else if (start - end <= 15) {
          return {
            message: "15 minutes break is there please shedule after break",
          };
        }
      }
    }
  }
  return "true";
};
