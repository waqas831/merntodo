import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import "../src/index.css";
const ModelsUpdate = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const location = useLocation();
  const postid = location.pathname.substring(2);
  const notify = (msg) => {
    toast.success(msg);
  };

  const getdata = async () => {
    const data = await axios.get(`/:${postid}`);
    setValue(data.data.record.data);
  };

  const updateitem = async () => {
    const data = await axios.put(`/edit/:${postid}`, {
      data: value,
    });
    console.log("saaaaaaaaaaaaaaaaaaaaaaaa", data);
    if (data.data.msg === "Success") {
      notify("Updated Successfully");
      setTimeout(() => {
        navigate("/");
      }, [5000]);
    } else {
      notify("Not Updated");
      setTimeout(() => {
        alert("Error");
      }, [5000]);
    }
  };

  useEffect(() => {
    getdata();
  }, []); // eslint-disable-line

  return (
    <div className="flex_item">
      <ToastContainer />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter Your Text"
      />
      <button onClick={updateitem}>Update</button>
    </div>
  );
};

export default ModelsUpdate;
