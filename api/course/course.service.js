const pool = require("../../config/database");

module.exports = {
  getCourseDetails: callBack => {
    pool.query(
      `select * from courses where isActive = 1`,
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
