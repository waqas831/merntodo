const express = require("express");
const router = express.Router();
const TodoModel = require("../models/model");
require("dotenv").config();

router.get("/", async (req, res) => {
  const alldata = await TodoModel.find({});
  if (alldata) {
    res.status(200).json({ msg: "data is given", data: alldata });
  } else {
    res.status(400).json({ msg: "data is not given" });
  }
});

router.post("/add", async (req, res) => {
  const todo = await req.body.data;
  const newAddData = await new TodoModel({
    data: todo,
  });

  const resmsg = await newAddData.save();
  if (resmsg) {
    res.status(200).json({ msg: "data addedd successfully", data: newAddData });
  } else {
    res.status(400).json({ msg: "data not addedd successfully" });
  }
});

router.delete("/del/:id", async (req, res) => {
  const id = req.params.id;
  const record = await TodoModel.findByIdAndDelete(id);
  if (record) {
    res.status(200).json({ msg: "Success", record: record });
  } else {
    res.status(400).json({ msg: "not deleted" });
  }
});

router.get("/:id", async (req, res) => {
  const userid = req.params.id;
  const id = userid.substring(1);
  const record = await TodoModel.findById({ _id: id });
  if (record) {
    res.status(200).json({ msg: "Success", record: record });
  } else {
    res.json({ msg: "Not Found" });
  }
});

router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const data = await TodoModel.findOneAndUpdate(id, {
    $set: { data: req.body.data },
  });
  if (data) {
    res.json({ msg: "Success" });
  } else {
    res.json({ msg: "not updated" });
  }
});

module.exports = router;
