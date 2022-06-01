const mongoose = require("mongoose");

const schedulerDataSchema = new mongoose.Schema(
  {
    dep: { type: String, required: true },
    course: {
      courseId: { type: String, required: true },
      courseNo: { type: String, required: true },
      maxNoOfStudents: { type: Number, required: true },
    },
    room: {
      roomName: { type: String, required: true },
      roomCapacity: { type: Number, required: true },
    },
    instructor: {
      instructorName: { type: String, required: true },
      instructorId: { type: String, required: true },
    },
    meetingTime: {
      meetingDays: [{ type: String, required: true }],
      meetingStart: { type: String, required: true },
      meetingEnd: { type: String, required: true },
      meetingId: { type: String, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Data = mongoose.model("data", schedulerDataSchema);
module.exports = Data;
