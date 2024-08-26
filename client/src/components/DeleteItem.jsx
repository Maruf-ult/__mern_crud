import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function DeleteItem() {
  const location = useLocation();
  const { id } = location.state || {};

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const deleteUser = await axios.delete(`http://localhost:3000/api/delete/${id}`);
      const response = deleteUser.data;
      console.log(response);
      if (response.success) {
        toast.success(response.msg);
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center mt-3  ">
      <div className="flex flex-col justify-center items-center h-48 w-96 bg-blue-300 space-y-3 pt-10 rounded-md shadow-lg ">
        <h1 className="text-center font-bold text-lg">Are you sure! <span className="text-red-500">You want to delete</span></h1>
        <div className="flex space-x-3 pl-48 pt-10">
          <button className="bg-red-500 text-white h-7 w-20 border-solid rounded-md" onClick={handleDelete}>Yes</button>
          <button className="bg-green-500 text-slate-900 h-7 w-20 rounded-md" onClick={handleNavigate}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteItem;
