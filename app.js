"use strict";
var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');


const fetch = require("node-fetch");
var app = express();
app.use(bodyParser.json());
app.use(cors());

const faqs = [
  {
    "id": 1,
    "question": "How often should I exercise?",
    "answer": "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
  },
  {
    "id": 2,
    "question": "What time of day is best to work out?",
    "answer": "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
  },
  {
    "id": 3,
    "question": "How long should my workouts be?",
    "answer": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
  },
  {
    "id": 4,
    "question": "Do I need to warm up before my workouts?",
    "answer": "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
  },
  {
    "id": 5,
    "question": "Should I do strength training, cardio or both?",
    "answer": "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
  },
  {
    "id": 6,
    "question": "Should I lift weights for strength training?",
    "answer": "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
  }
];

app.get('/faqs', function (req, res) {
  res.send(faqs);
})

app.listen(4000, function () { return console.log("listening on 4000"); });
module.exports = app;
