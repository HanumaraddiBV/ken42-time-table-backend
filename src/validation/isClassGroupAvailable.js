module.exports= (course, meetingTime,instructorData)=>{

  //loop through the previous data to check availability of class group
    for (let i = 0; i < instructorData.length; i++) {
        if (
          course.courseNo == instructorData[i].course.courseNo
          ) {
              
             // extracting start time from current data and converting into number
              let start = Number(meetingTime.meetingStart.split(":").join(""))
             // extracting end time from previous data and converting into number
              let end =  Number(instructorData[i].meetingTime.meetingEnd.split(":").join(""))
           
             //comparing both time slots to make sure that they dont get overlap
              if(start < end){
                  return ({message:"This class students already engaged in other class"})
              }
              //fixing break after every class
              else if(start-end <= 15){
                return ({message:"15 minutes break is there please attend classes after the break"})
              }
            
        }
      }
      return "true"
}