import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ReadData() {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/add-item');
    };


  useEffect(() => {
        async function FetchData() {
      try {
                const findUser = await axios.get("http://localhost:3000/api/read");
                const response = findUser.data;
                console.log(response);
                setData(response);
      } catch (error) {
                console.log(error);
        alert(error);
      }
    }

        FetchData();
  }, []);

    const UpdateItem = (id) => {
        navigate('/update-item', { state: { id: id } });
     //    alert(id);
    };

    const DeleteItem = (id) => {
     navigate('/delete-item', { state: { id: id } });
  //    alert(id);
 };
    

  return (
    <>
            <div className="flex bg-green-400 font-bold border-transparent p-5 w-full max-w-4xl mx-auto">
                <div className="flex justify-between w-full items-center">
                    <h1 className="space-x-1 font-serif font-bold text-xl">Information list</h1>
                    <button onClick={handelClick} className="bg-white rounded px-5 py-1">
                        Add <span className='mx-2'><FontAwesomeIcon icon={faSquarePlus} size='lg' /></span>
        </button>
      </div>
            </div>
            <div className="flex justify-center my-5 mt-3 ">
                <table border="1" className="w-full max-w-4xl border-collapse text-left shadow-md ">
                    <thead className="bg-gray-400">
                        <tr>
                            <th className="px-5 py-2">Roll</th>
                            <th className="pl-5">Name</th>
                            <th className="pl-12">Email</th>
                            <th className="pr-16">Project Name</th>
                            <th className="pr-5">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        {data.findUser?.map((item,index) => (
                            <tr key={item._id} className={`rounded-md my-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}  hover:bg-gray-300 cursor-pointer`}>
                                <td className="px-4 py-2">{item.roll}</td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="pl-10 py-2">{item.email}</td>
                                <td className="pr-5">{item.projectname}</td> 
                                <div className="flex space-x-3 py-2">
                                    <td><FontAwesomeIcon icon={faFilePen} size='lg' onClick={() => UpdateItem(item._id)} /></td>
                                    <td><FontAwesomeIcon icon={faTrash} size='lg' onClick={()=>DeleteItem(item._id)} /></td>
                                </div>
                            </tr>
          ))}
                    </tbody>
                </table>
      </div>
    </>
  );
}

export default ReadData;
