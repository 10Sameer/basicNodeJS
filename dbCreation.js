var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",  
  database: "trainingJS" 
});

con.connect(function(err) {
  if (err) {
    console.error("Connection failed: " + err.message);
    return;
  }
  console.log("Connected to MySQL successfully!");
});
