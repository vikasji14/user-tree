import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../redux/userSlice";

const UserTable = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [modalType, setModalType] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Handle user search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  // Handle sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Open modal for delete or edit
  const openModal = (type, user) => {
    setModalType(type);
    setSelectedUser(user);
    setEditForm(user || {});
  };
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };


  // Handle edit form change
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Handle update user
  const handleUpdateUser = (e) => {
    e.preventDefault();
    dispatch(updateUser(editForm));
    closeModal();
  };

  // Handle delete user
  const handleDeleteUser = () => {
    dispatch(deleteUser(selectedUser.id));
    closeModal();
  };

  // Close modal
  const closeModal = () => {
    setModalType(null);
    setSelectedUser(null);
  };

  return (
    <div className="p-6 bg-white w-full shadow-lg rounded-lg mt-4">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border p-2 w-2xl rounded pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute left-3 top-2 text-gray-400 text-md">🔍</span>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("name")}>
              Name {sortField === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("email")}>
              Email {sortField === "email" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("phone")}>
              Phone {sortField === "phone" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="border p-2">Aadhar</th>
            <th className="border p-2">Position</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => {
            const parentUser = sortedUsers.find(u => u.id.toString() === user.parent); // Find parent by ID

            return (
              <tr key={user.id}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">{user.aadhar}</td>
                <td className="border p-2">
                  {user.position} - {parentUser ? `${parentUser.name}` : "(No Parent)"} 
                </td>
                <td className="border p-2 flex gap-2">
                  <button onClick={() => navigate(`/tree/${user.id}`)} className="bg-blue-500 text-white px-3 py-1 rounded">
                    View
                  </button>
                  <button onClick={() => openModal("delete", user)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                  <button onClick={() => openModal("edit", user)} className="bg-green-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {modalType === "delete" ? "Confirm Delete" : "Edit User"}
            </h2>
            {modalType === "delete" ? (
              <>
                <p>Are you sure you want to delete <span className="font-bold">{selectedUser?.name}</span>?</p>
                <div className="mt-4 flex justify-end gap-3">
                  <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded">
                    Cancel
                  </button>
                  <button onClick={handleDeleteUser} className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <form onSubmit={handleUpdateUser} className="flex flex-col gap-3">
                <input type="text" name="name" value={editForm.name} onChange={handleEditChange} className="border p-2 rounded" required />
                <input type="email" name="email" value={editForm.email} onChange={handleEditChange} className="border p-2 rounded" required />
                <input type="text" name="phone" value={editForm.phone} onChange={handleEditChange} className="border p-2 rounded" required />
                <input type="text" name="aadhar" value={editForm.aadhar} onChange={handleEditChange} className="border p-2 rounded" required />
                <div className="flex justify-end gap-3">
                  <button onClick={closeModal} type="button" className="bg-gray-300 px-4 py-2 rounded">
                    Cancel
                  </button>
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Update
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
