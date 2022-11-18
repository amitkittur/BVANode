const { getCourseDetails } = require("./course.service");

module.exports = {
  getCourseDetails: (req, res) => {
    getCourseDetails((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({ success: 1, data: results });
    });
  }
};
