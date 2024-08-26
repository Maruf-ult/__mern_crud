import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function AddItem() {
   
  const navigate = useNavigate();

  const handleNavigate= ()=>{
    navigate('/');
  };

  const [value, setValue] = useState({
    roll: "",
    name: "",
    email: "",
    projectname: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addUser = await axios.post(
        "http://localhost:3000/api/create",
        value
      );
      const response = addUser.data;
      if (response.success) {
        toast.success(response.msg);
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const messages = error.response.data.errors.map((err) => err.msg).join("\n");
        alert(messages);
      } else {
        alert("Diplicate roll or an error occurred.");
      }
      console.log(error);
    }
    console.log(value);
  };

  return (
    
    <div className=" flex justify-center  bg-slate-400 border-4 border-transparent rounded-md shadow-lg w-96 m-auto my-20">
      <form  className="my-20 mx-24">
        <input
          className="my-2 border-4 p-1 border-transparent rounded "
          type="number"
          name="roll"
          value={value.roll}
          onChange={handleChange}
          placeholder="Roll"
        />
        <input
          className="my-2 border-4 p-1 border-transparent rounded "
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="my-2 border-4 p-1  border-transparent rounded "
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="my-2 border-4 p-1 border-transparent rounded "
          type="text"
          name="projectname"
          value={value.projectname}
          onChange={handleChange}
          placeholder="Project Name"
        />
        <div className="my-4">
          <button onClick={handleNavigate} className=" bg-red-500 border-4 border-transparent rounded-md font-bold px-2 ">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-green-300 border-4 border-transparent rounded-md font-bold ml-6 px-2 ">
            Add Task
          </button>
        </div>
      </form>
    </div>

  );
}

export default AddItem;
