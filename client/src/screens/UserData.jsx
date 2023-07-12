import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import { useState } from 'react';

const UserData = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  console.log(id);

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then((response)=>{
      setData(response.data);
    }).catch((error)=>console.log(error))
  }, [id])
  
  return (
    <div className="bg-gray-200 h-screen rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">User Data</h3>
      <div className="">
        <div className="flex flex-col border border-black p-2">
          <span className="text-gray-600">User ID:</span>
          <span className="text-gray-900 font-bold">{data.id}</span>
        </div>
        <div className="flex flex-col border border-black p-2">
          <span className="text-gray-600">Document Number:</span>
          <span className="text-gray-900 font-bold">{data._id}</span>
        </div>
        <div className="flex flex-col border border-black p-2">
          <span className="text-gray-600">Name:</span>
          <span className="text-gray-900 font-bold">{data.name}</span>
        </div>
        <div className="flex flex-col border border-black p-2">
          <span className="text-gray-600">Email:</span>
          <span className="text-gray-900 font-bold">{data.email}</span>
        </div>
        <div className="flex flex-col border border-black p-2">
          <span className="text-gray-600">Phone:</span>
          <span className="text-gray-900 font-bold">{data.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default UserData;
