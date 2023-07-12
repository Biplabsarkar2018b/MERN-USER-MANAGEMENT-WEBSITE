import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CreateUpdateUser = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  //   const { id } = match.params;
  //   const id = true

  const isEditing = !!id; // Check if ID is present to determine if editing or creating a user

  useEffect(() => {
    if (isEditing) {
      const fetchUser = async () => {
        try {
          axios
            .get(`${BASE_URL}/${id}`)
            .then((response) => {
              setUser(response.data);
            })
            .catch((error) => console.log(error));
        } catch (error) {
          console.log(error);
        }
      };

      fetchUser();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const {id:idNum,name,email,phone} = {user}
    if (isEditing) {
      //updating the user to database
      const user_id = id;
      const { name, email, phone } = user;
      axios
        .put(BASE_URL, {
          user_id,
          name,
          email,
          phone,
        })
        .then((response) => navigate("/"))
        .catch((error) => console.log(error));
    } else {
      //creating the user

      axios
        .post(BASE_URL, user)
        .then((response) => navigate("/"))
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={user.id}
              onChange={handleChange}
              disabled={isEditing}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isEditing ? "Update User" : "Create User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUpdateUser;
