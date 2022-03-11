let url =
  "mongodb+srv://waqas:waqas123@cluster0.b6gcf.mongodb.net/myblog?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://waqas:waqas123@cluster0.b6gcf.mongodb.net/myblog?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
if (db) {
  console.log("database will be connected");
} else {
  console.log("not connected");
}

module.exports=db;