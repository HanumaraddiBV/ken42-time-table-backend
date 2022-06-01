module.exports= (room, meetingTime,instructorData)=>{

  //loop through the previous data to check availability of class group
    for (let i = 0; i < instructorData.length; i++) {
        //checking current room name is matching with data stored in database
        if (
          room.roomName == instructorData[i].room.roomName 
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
              let start = Number(meetingTime.meetingStart.split(":").join(""))
              
             // extracting end time from previous data and converting into number
              let end =  Number(instructorData[i].meetingTime.meetingEnd.split(":").join(""))
              
              //comparing both time slots to make sure that they dont get overlap
              if(start < end){
                  return ({message:"This classroom is already engaged"})
              }
             }
        }
      }
      return "true"
}