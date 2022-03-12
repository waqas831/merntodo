import React, { useState,useEffect } from "react";
import ShowItems from "./ShowItems";
import axios from 'axios';

const TakeInput = () => {
  const [value, setValue] = useState("");
  const [alldata, setAlldata] = useState([]);
  const taken=async()=>{
    const data=await axios.get('/record');
    const arraydata=data.data.data;
    setAlldata(arraydata);
    console.log('array data',arraydata);
  }


  useEffect(()=>{
    taken();
    // eslint-disable-line
  },[]); 

  const submit = async() => {
    const data=await axios.post('http://localhost:8080/add',{data:value});
    const msg=data.data.msg;
    console.log(msg);
    setValue("");
    taken();
  };
  return (
    <>
      <div className="flex_item">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter Your Text"
        />
        <button onClick={submit}>Submit</button>
      </div>
      <div className="fix_height">
        <ShowItems
          alldata={alldata}
          setdata={setAlldata}
          myvalue={value}
          setmyvalue={setValue}
          taken={taken}
        />
      </div>
    </>
  );
};

export default TakeInput;
