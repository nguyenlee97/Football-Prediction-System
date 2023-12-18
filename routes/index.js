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
exports.matchfixture = function(req, res) {
  const matchFixture = [{
    "match": "AFC Bournemouth VS Luton Town",
    "date": "16 Dec 2023",
    "id": 100
  },
  {
    "match": "Arsenal VS Brighton & Hove Albion",
    "date": "16 Dec 2023",
    "id": 101
  },
  {
    "match": "Brentford VS Aston Villa",
    "date": "16 Dec 2023",
    "id": 102
  },
  {
    "match": "Burnley VS Everton",
    "date": "16 Dec 2023",
    "id": 103
  },
  {
    "match": "Chelsea VS Sheffield United",
    "date": "16 Dec 2023",
    "id": 104
  }
  ]
  res.send(matchFixture)  
};

exports.pastmatch = function(req, res) {
  const pastMatch = [
    {
    "match": "Tottenham VS Newcastle",
    "date": "10 Dec 2023",
    "result": "4 - 1"
  },
  {
    "match": "Everton VS Chelsea",
    "date": "10 Dec 2023",
    "result": "2 - 0"
  },
  {
    "match": "Fulham VS West Ham",
    "date": "10 Dec 2023",
    "result": "5 - 0"
  },
  {
    "match": "Luton VS Manchester City",
    "date": "10 Dec 2023",
    "result": "1 - 2"
  },
  {
    "match": "Aston Villa VS Arsenal",
    "date": "10 Dec 2023",
    "result": "1 - 0"
  }
  ]
  
  res.send(pastMatch)  
};

exports.predictMatch = function (req,res) {
  const { matchId } = req.params
  const matchPrediction = matchId == 100 ? {
    homeTeam: "Bournemouth",
    predictHomeScore: 1,
    awayTeam: "Luton",
    predictAwayScore: 1
  } : {
    homeTeam: "Arsenal",
    predictHomeScore: 2,
    awayTeam: "Brighton",
    predictAwayScore: 1
  }
  res.send(matchPrediction)
}

exports.historicalStatistic = function (req,res) {
  const { matchId } = req.params
  const historicalStatisticResult = matchId == 100 ? [
    {
      "statName": "Goal Difference Last Game",
      "homeTeam" : 0,
      "awayTeam": -2
    },
    {
      "statName": "Goal Difference 2 Game Prior",
      "homeTeam" : 2,
      "awayTeam": -1
    },
    {
      "statName": "Shot On Target Last Game",
      "homeTeam" : 7,
      "awayTeam": 6
    },
    {
      "statName": "Shot On Target 2 Game Prior",
      "homeTeam" : 10,
      "awayTeam": 2
    },
    {
      "statName": "Full Time Goal Last Game",
      "homeTeam" : 2,
      "awayTeam": 1
    },
    {
      "statName": "Full Time Goal 2 Game Prior",
      "homeTeam" : 2,
      "awayTeam": 0
    }
  ] : [
    {
      "statName": "Goal Difference Last Game",
      "homeTeam" : 1,
      "awayTeam": -1
    },
    {
      "statName": "Goal Difference 2 Game Prior",
      "homeTeam" : 2,
      "awayTeam": 1
    },
    {
      "statName": "Shot On Target Last Game",
      "homeTeam" : 6,
      "awayTeam": 6
    },
    {
      "statName": "Shot On Target 2 Game Prior",
      "homeTeam" : 8,
      "awayTeam": 3
    },
    {
      "statName": "Full Time Goal Last Game",
      "homeTeam" : 2,
      "awayTeam": 3
    },
    {
      "statName": "Full Time Goal 2 Game Prior",
      "homeTeam" : 3,
      "awayTeam": 2
    }
  ]
  
  res.send(historicalStatisticResult)
}

exports.pastMatchup = function (req,res) {
  const { matchId } = req.params
  const pastMatchupResult = matchId == 100 ? [{
              homeTeam:'Luton',
              homeScore:'3',
              awayTeam:'Bournemouth',
              awayScore:'2',
              date:'15 Jan 2022',
  },
{
              homeTeam:'Bournemouth',
              homeScore:'2',
              awayTeam:'Luton',
              awayScore:'1',
              date:'25 Sep 2021',
},
{            
              homeTeam:'Bournemouth',
              homeScore:'0',
              awayTeam:'Luton',
              awayScore:'1',
              date:'16 Jan 2021',
},
{
              homeTeam:'Luton',
              homeScore:'0',
              awayTeam:'Bournemouth',
              awayScore:'0',
              date:'19 Dec 2020',
},
{
              homeTeam:'Bournemouth',
              homeScore:'4',
              awayTeam:'Luton',
              awayScore:'0',
              date:'05 Jan 2020',
},
{
              homeTeam:'Bournemouth',
              homeScore:'1',
              awayTeam:'Luton',
              awayScore:'1',
              date:'28 Jan 2009',
},
  ] : [
{
  homeTeam:'Arsenal',
  homeScore:'0',
  awayTeam:'Brighton',
  awayScore:'3',
  date:'14 May 2023',
},
{
  homeTeam:'Brighton',
  homeScore:'2',
  awayTeam:'Arsenal',
  awayScore:'4',
  date:'1 Jan 2023',
},
{
  homeTeam:'Arsenal',
  homeScore:'1',
  awayTeam:'Brighton',
  awayScore:'3',
  date:'10 Nov 2022',
},
{
  homeTeam:'Arsenal',
  homeScore:'1',
  awayTeam:'Brighton',
  awayScore:'2',
  date:'09 Apr 2022',
},
{
  homeTeam:'Brighton',
  homeScore:'0',
  awayTeam:'Arsenal',
  awayScore:'0',
  date:'02 Oct 2023',
},
];
  res.send(pastMatchupResult)
}

