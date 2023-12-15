var mysql = require('mysql');

// Create a MySQL connection
// var connection = mysql.createConnection({
//   host: 'football-prediction.ck4gbmwymg8j.ap-southeast-2.rds.amazonaws.com',
//   user: 'admin',
//   password: '12345678',
//   database: 'footballpredict'
// });

// // Connect to the MySQL database
// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ', err);
//     return;
//   }
//   console.log('Connected to the database');
// });

/*
  GET /
*/
exports.accuracy = function(req, res) {
  // Run the database query
  // connection.query('SELECT * FROM footballpredict.prediction', function(err, results) {
  //   if (err) {
  //     console.error('Error executing query: ', err);
  //     res.status(500).send('Error retrieving data from the database');
  //     return;
  //   }
    
    // Render the view and pass the query results to the template
    // res.render('main.html', { results });
  // });
  const barChartDataConsumption = 
    {
      week: [08, 09, 10, 11, 12, 13, 14, 15, 16],
      accuracy: [
        {
          name: "Home Win",
          data: [57.14, 55.92, 61.78, 59.27, 54.12, 75.28, 61.78, 70.12, 56.33],
        },
        {
          name: "Draw",
          data: [22.86, 23.72, 32.13, 34.15, 25.37, 31.24, 18.26, 26.84, 23.02],
        },
        {
          name: "Home Lose",
          data: [52.37, 53.49, 47.91, 67.82, 50.93, 38.76, 35.92, 41.22, 53.49],
        },
        {
          name: "Overall",
          data: [38.92, 40.58, 41.89, 52.17, 50.25, 48.92, 41.82, 45.67, 39.82],
        },
      ]
    };
  res.send(barChartDataConsumption)
}
  /*
  GET /match/:matchId
*/
exports.matchPrediction = function(req, res) {
        // var matchId = req.params.matchId;
      
        // // Run the database query to retrieve the specific match prediction
        // connection.query('SELECT * FROM footballpredict.prediction WHERE id = ?', [matchId], function(err, results) {
        //   if (err) {
        //     console.error('Error executing query: ', err);
        //     res.status(500).send('Error retrieving data from the database');
        //     return;
        //   }
      
        //   // Check if a match prediction was found for the given matchId
        //   if (results.length === 0) {
        //     res.status(404).send('Match prediction not found');
        //     return;
        //   }
      
        //   // Render the view and pass the match prediction data to the template
        //   res.render('match.html', { matchPrediction: results[0] });
        // });
      };