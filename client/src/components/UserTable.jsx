import React from "react";
import UserTableRow from "./UserTableRow ";

const UserTable = ({ users, onDelete, onUpdate,onView }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableRow
              key={user.id}
              user={user}
              onDelete={onDelete}
              onView={onView}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
