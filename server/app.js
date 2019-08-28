const express = require('express');
const app = express();
const fs = require('fs');

const modifierFilePath = 'server/data/modifier.json';
const ownerFilePath = 'server/data/owner.json';
const structureFilePath = 'server/data/structure.json';
const dataFilePath = 'server/data/data-editable.json';

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
 });

app.get('/modifier', (req, res) => {
  res.json(getJsonData(modifierFilePath));
});

app.get('/owner', (req, res) => {
  res.json(getJsonData(ownerFilePath));
});

app.get('/structure', (req, res) => {
  res.json(getJsonData(structureFilePath));
});

app.get('/data', (req, res) => {
  res.json(getJsonData(dataFilePath));
});

const getJsonData = filePath => JSON.parse(fs.readFileSync(filePath));

const port = 3030;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
