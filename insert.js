var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "trainingJS"
  });


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected successfully");
    var sql = "INSERT INTO nodeJs (name, email) VALUES ('Tamang Vai k xa', 'njhagharja@gmail.com')";
    var sql = "INSERT INTO nodeJs (name, email) VALUES ('Tamang Vai k xa vai', 'njhagharja@gmail.com')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });