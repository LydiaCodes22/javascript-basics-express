/* eslint-disable prefer-destructuring */
const express = require('express');
const { json } = require('express/lib/response');
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

app.get('/strings/lower/:string', (req, res) => {
  const string = req.params.string;
  const result = { result: `${string.toLowerCase()}` };
  res.status(200).json(result);
});

app.get('/strings/first-characters/:string', (req, res) => {
  const stringLength = req.query.length;
  res.status(200).json({ result: req.params.string.slice(0, stringLength) });
});

app.get('/numbers/add/:number1/and/:number2', (req, res) => {
  const number1 = Number(req.params.number1);
  const number2 = Number(req.params.number2);
  if (isNaN(number1) || isNaN(number2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: number1 + number2 });
  }
});

module.exports = app;
