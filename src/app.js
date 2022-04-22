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

module.exports = app;
