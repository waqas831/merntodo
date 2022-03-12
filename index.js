
const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const port =process.env.PORT || 8080;
const route = require("./routes/index");
const cors=require('cors');
const path=require('path');

app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
require('./db/db');
app.use("/", route);

if(process.env.NODE_ENV=='production'){
  app.use(express.static('todo/build'));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "todo", "build", "index.html"));
  });
}

app.listen(port, (err) => {
  console.log(`server is running on port ${port}`);
});
