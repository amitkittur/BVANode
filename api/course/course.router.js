const router = require("express").Router();
const { getCourseDetails } = require("./course.controller");

router.get("/getCourseDetails", getCourseDetails);

module.exports = router;
