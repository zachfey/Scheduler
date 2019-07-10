const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Rows collection and inserts the rows below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/scheduler"
);

const rowSeed = [
  {
    week: 28,
    year: 2019,
    rows: [{
      time: '11:45',
      type: 'Section IV',
      days: [{
        numGuests: 22,
        guides: ['Linc', 'Yook', 'Merry', 'Hunter', '']
      },
      {
        numGuests: 12,
        guides: ['Sarah', 'Geoff P']
      },
      {
        numGuests: null,
        guides: ['John']
      },
      {
        numGuests: 13,
        guides: []
      },
      {
        numGuests: 14,
        guides: ['Dusty']
      },
      {
        numGuests: 15,
        guides: []
      },
      {
        numGuests: 16,
        guides: []
      }
      ]
    },
    {
      time: '12:30',
      type: 'Middle',
      days: [{
        numGuests: 45,
        guides: ['Zach', 'Adam', '$Mike', 'Butters', '']
      },
      {
        numGuests: 12,
        guides: ['Tardy', 'Dylan']
      },
      {
        numGuests: null,
        guides: ['Prom']
      },
      {
        numGuests: 25,
        guides: ['Dusty', 'Kerrie', 'Sam']
      },
      {
        numGuests: 14,
        guides: ['Brent']
      },
      {
        numGuests: 40,
        guides: ['Zach', 'Dusty', 'Adam', 'Nick']
      },
      {
        numGuests: 16,
        guides: []
      }
      ]
    }]

  }
];

db.Row
  .remove({})
  .then(() => db.Row.collection.insertMany(rowSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
