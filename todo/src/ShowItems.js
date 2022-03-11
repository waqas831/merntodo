import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowItems = ({ setdata, taken, alldata, myvalue, setmyvalue }) => {
  const notify=(msg)=>{
    toast.success(msg);
  }
  const navigate=useNavigate();
 
  const deletefun = async (index) => {
    const data = await axios.delete(`http://localhost:8080/del/${index}`);
    if(data.data.msg==="Success"){
      setdata(alldata.filter((item) => item._id !== index));
      setmyvalue(myvalue.filter((item) => item._id !== index));
      notify("Deleted Successfully");
      // taken();
      setTimeout(()=>{
        navigate("/");
      },[5000])

    }
    else{
      notify("Not Deleted");
      setTimeout(()=>{
        alert("Error");
      },[5000])
    }
    // const msg = data.data.data;
    // console.log(msg);
  };

  const editfun = (index) => {
    navigate(`/:${index}`)
  };
  return (
    <>
    <ToastContainer />
      {alldata.map((item) => {
        return (
          <div className="flex_item1" key={item._id}>
            <p>{item.data}</p>
            <button onClick={() => deletefun(item._id)}>
              <i className="fa-solid fa-delete-left"></i>
            </button>
            <button onClick={() => editfun(item._id)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ShowItems;
