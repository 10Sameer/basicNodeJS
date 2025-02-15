const mysql = require('mysql');

// Create MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "trainingjs"
});


con.connect(function(err) {
  if (err) {
    console.error("Connection failed: " + err.message);
    return;
  }
  console.log("Connected to MySQL!");

  // DELETE query
  const userId = 1; 
  const sql = "DELETE FROM nodejs WHERE id = ?";

  con.query(sql, [userId], function (err, result) {
    if (err) {
      console.error("❌ Error deleting record: " + err.message);
    } else {
      console.log(`✅ Record deleted successfully. Rows affected: ${result.affectedRows}`);
    }

    con.end();
  });
});
