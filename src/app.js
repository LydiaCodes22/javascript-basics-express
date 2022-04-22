/* eslint-disable prefer-destructuring */
const express = require('express');
const { restart } = require('nodemon');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const string = req.params.string;
  const result = { result: `Hello, ${string}!` };
  res.status(200).json(result);
});

app.get('/strings/upper/:string', (req, res) => {
  const string = req.params.string;
  const result = { result: `${string.toUpperCase()}` };
  res.status(200).json(result);
});

module.exports = app;
