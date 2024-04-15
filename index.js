const express = require('express');
const body_parser = require('body-parser');
const body_parser_xml = require('body-parser-xml');
const app = express();
const PORT = process.env.PORT || 4000;

// Global Variable for last data in post api
var last_json_data = {};
var last_xml_data = '';

body_parser_xml(body_parser);
app.use(body_parser.xml());
app.use(body_parser.json());

// JSON APIs
app.get("/test-invoice-webhook/json", (_req, res) => {
  res.send("Success");
});

app.post("/test-invoice-webhook/json", (req, res) => {  
  last_json_data = req.body;
  res.send("Success");
});

app.get("/test-invoice-webhook/last-pushed-data/json", (_req, res) => {
  res.send(last_json_data);
});

// XML APIs
app.get("/test-invoice-webhook/xml", (_req, res) => {
  res.send("Success");
});

app.post("/test-invoice-webhook/xml", (req, res) => { 
  last_xml_data = req.body;
  res.send("Success");
});

app.get("/test-invoice-webhook/last-pushed-data/xml", (_req, res) => {
  res.send(last_xml_data);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});  