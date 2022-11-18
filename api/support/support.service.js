const axios = require("axios");
const pool = require("../../config/database");
var nodemailer = require("nodemailer");
module.exports = {
  createSupport: (data, callBack) => {
    pool.query(
      `insert into support(name, email, number, subject, message,optionname) 
                values(?,?,?,?,?,?)`,
      [
        data.name,
        data.email,
        data.number,
        data.subject,
        data.message,
        data.optionname
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log(data.email)
        // var transporter = nodemailer.createTransport({
        //   host: "mail.blockverseacademy.com",
        //   port: 465,
        //   secure: true,


        //   auth: {
        //     user: process.env.EMAILUSERNAME,
        //     pass: process.env.EMAILPASSWORD
        //   }
        // });
        //   console.log(process.env.EMAILUSERNAME);
        //   console.log(process.env.EMAILPASSWORD)
        //   const transporter = nodemailer.createTransport({    
        //     host: "smtpout.secureserver.net",  
        //     secure: true,
        //     secureConnection: true, // TLS requires secureConnection to be false
        //     // tls: {
        //     //     ciphers:'SSLv3'
        //     // },
        //     requireTLS:false,
        //     port: 465,
        //     debug: true,
        //     auth: {
        //         user: process.env.EMAILUSERNAME,
        //         pass: process.env.EMAILPASSWORD
        //     }
        // });

        //         var mailOptions = {
        //           from: "autoreply@blockverseacademy.com",
        //           to: `${data.email}`,
        //           subject: "Request for a Callback",
        //           html: `<div class="read-content-body"><h5 class="mb-4">Dear Support Team,</h5><p class="mb-2">A request callback has been inititated with following details <br />
        //           <br />Name : ${data.name}
        //           <br />Emailaddress : ${data.email}
        //           <br />Number : ${data.number}
        //           <br />Subject : ${data.subject}
        //           <br />Message : ${data.subject}
        //           <br />Callback for : ${data.optionname}
        //           <br />
        //           <h5 class="pt-3">Kind Regards</h5><p>BlockVerse Academy</p><hr></div>
        // `
        //         };
        //         transporter.sendMail(mailOptions, function(error, info) {
        //           if (error) {
        //             console.log(error);
        //           } else {
        //             console.log("Email sent: " + info.response);
        //           }
        //         });

        // var results = "";
        // var message = " `<div class="read-content-body"><h5 class="mb-4">Dear Support Team,</h5><p class="mb-2">A request callback has been inititated with following details <br />
        //           <br />Name : ${data.name}
        //           <br />Emailaddress : ${data.email}
        //           <br />Number : ${data.number}
        //           <br />Subject : ${data.subject}
        //           <br />Message : ${data.subject}
        //           <br />Callback for : ${data.optionname}
        //           <br />
        //           <h5 class="pt-3">Kind Regards</h5><p>BlockVerse Academy</p><hr></div>"

        // var emailbody =
        //   JSON.stringify({
        //     Name: data.name,
        //     Emailaddress: data.email,
        //     Number: data.number,
        //     Subject: data.subject,
        //     Message: data.message,
        //     Callbackfor: data.optionname
        //   });
        //     console.log(emailbody);


        //     const formData = new FormData();
        //     formData.append('Emailaddress', data.email);
        //     formData.append('Subject',  data.subject);
        //     formData.append('Message',  data.subject);
        // axios
        //   .post("https://blockverseacademy.com/email.php", formData)
        //   .then(function (response) {
        //     // Get Token for Autologin
        //     console.log('response',response)

        //     // Ends Here
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });



        return callBack(null, results);
      }
    );
  },

  getSupportDetailsById: (id, callBack) => {
    pool.query(
      `select id,name, email, number, subject, message from support where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getSupportDetails: callBack => {
    pool.query(
      `select id,name, email, number, subject, message from support`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
