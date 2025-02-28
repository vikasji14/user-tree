import React from "react";

const UserTable = ({ users, navigate }) => {
  return (
    <table className="w-full m-4 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Aadhar</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.phone}</td>
            <td className="border p-2">{user.aadhar}</td>
            <td className="border p-2">
              <button
                onClick={() => navigate(`/tree/${user.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                View Tree
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
