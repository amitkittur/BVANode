const { uploadfile } = require("./upload.service");

module.exports = {
  uploadfile: (req, res) => {
    console.log("hoi");
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    console.log(req.files.files.name);

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.files;
    uploadPath = __dirname + "/files/" + req.files.files.name;
    console.log(uploadPath)
    sampleFile.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).json({
          success: 0,
          data: "Database connection errror"
        });
      }

      return res.status(200).json({ success: 1, data: "File Uploaded" });
    });
    // //   uploadfile(sampleFile,uploadPath, (err, results) => {
    // //     if (err) {
    // //       console.log(err);
    // //       return res.status(500).json({
    // //         success: 0,
    // //         data: "Database connection errror"
    // //       });
    // //     }

    // //     return res.status(200).json({ success: 1, data: results });
    //   });
  }
};
