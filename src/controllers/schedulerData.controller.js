const express = require("express");
const router = express.Router();

const Schedule = require("../models/schedulerData.model");
const checkClassLimit = require("../validation/checkClassLimit.js");
const isClassGroupAvailable = require("../validation/isClassGroupAvailable");
const isClassRoomAvailable = require("../validation/isClassRoomAvailable");
const isProfAvailable = require("../validation/isProfAvailable");

router.post("/schedule", async (req, res) => {
  try {
    // checking the number of student in class is must be in given limit
    const instructorData = await Schedule.find().lean().exec();
    const { course, instructor, meetingTime, room } = req.body;
    let checkC = checkClassLimit(course);
    if (checkC != "true") {
      return res.send(checkClassLimit(course));
    }

    // Chceking classroom is available  or not?

    const isroomAvailable = isClassRoomAvailable(
      room,
      meetingTime,
      instructorData
    );
    if (isroomAvailable != "true") {
      return res.send(isClassRoomAvailable(room, meetingTime, instructorData));
    }


    // Chceking class group is available  or not?
    const classGroupAvailable = isClassGroupAvailable(
      course,
      meetingTime,
      instructorData
    );
    if (classGroupAvailable != "true") {
      return res.send(
        isClassGroupAvailable(course, meetingTime, instructorData)
      );
    }

     // Chceking instructor having 2 classes at same time or not?
    const isAvailable = isProfAvailable(
      instructor,
      meetingTime,
      instructorData
    );
    if (isAvailable != "true") {
      return res.send(isProfAvailable(instructor, meetingTime, instructorData));
    }


    // if all condition are false then we can shedule 
    const scheduleData = await Schedule.create(req.body);

    return res.status(201).send({ scheduleData });
  } catch (err) {
    return res.status(500).send(err);
  }
});


// fetching all data stored in database
router.get("/timetable", async (req, res) => {
  try {
    const Data = await Schedule.find().lean().exec();
    return res.status(200).send(Data);
  } catch (e) {
    return res.status(500).send(err);
  }
});


module.exports = router;
