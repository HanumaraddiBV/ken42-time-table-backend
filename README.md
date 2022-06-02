# ken42-time-table-backend



# NodeJS secure RESTFUL api

A minimal, secure RESTFUL api for NodeJS. This project includes access control of objects, and crud operation and model!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.


# Running the software

* ```node src/server.js``` for simple setups.

# Adding New Schedule to the Backend

To add schedule, simply send a POST to /data/schedule/ with the required fields in the req body,

```
http://localhost:4000/datas/schedule
```


# Heroku deployment link

```
https://ken42-time-table.herokuapp.com/data/timetable
```

# API Endpoints

```
GET http://localhost:4000/data/timetable
POST http://localhost:4000/data/schedule
```
