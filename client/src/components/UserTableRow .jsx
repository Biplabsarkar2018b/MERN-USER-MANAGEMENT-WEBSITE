import React from "react";

const UserTableRow = ({ user, onDelete, onUpdate,onView }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.id}
      </th>
      <td className="px-1 md:px-6 py-4">{user.name}</td>
      <td className="px-1 md:px-6 py-4 gap-2">
        <button
          onClick={() => onDelete(user._id)}
          className="bg-red-500 hover:bg-red-600 text-white font-normal md:font-bold py-1 md:py-2 px-1 md:px-4 rounded mr-1 md:mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => onUpdate(user._id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-normal md:font-bold py-1 md:py-2 px-1 md:px-4  rounded mr-1 md:mr-2"
        >
          Update
        </button>
        <button
          onClick={() => onView(user._id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-normal md:font-bold py-1 md:py-2 px-1 md:px-4 rounded"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
