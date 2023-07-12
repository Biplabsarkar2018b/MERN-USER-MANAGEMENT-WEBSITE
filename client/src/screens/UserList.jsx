import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/constants";
import UserTable from "../components/UserTable";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  //   const users = [
  //     { id: 1, name: "John Doe" },
  //     { id: 2, name: "Jane Smith" },
  //     { id: 3, name: "Mike Johnson" },
  //   ];
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${BASE_URL}/length`)
      .then((response) => {
        // console.log(response.data?.length);
        setUserCount(response.data?.length);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`${BASE_URL}/${userId}`)
      .then((response) => {
        console.log(response.data);
        // Filter out the deleted user from the data state
        setdata((prevData) => prevData.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (userId) => {
    navigate(`/edituser/${userId}`);
  };
  const handleView = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="w-full h-screen bg-gray-700 relative">
      <button
        onClick={() => navigate("/edituser")}
        className="fixed right-5 top-5 bg-blue-500 text-white p-4 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
      </button>
      <div className="flex flex-col">
        <h1 className="bg-gray-700 text-white text-3xl font-bold text-center py-5">
          Users List
        </h1>
        <h1 className="bg-gray-700 text-white font-bold text-center">
          Total Users : {userCount}
        </h1>
      </div>
      {data && (
        <UserTable
          users={data}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onView={handleView}
        />
      )}
    </div>
  );
};

export default UserList;
