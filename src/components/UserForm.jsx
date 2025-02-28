import { useState } from "react";

const UserForm = ({ addUser, users }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", aadhar: "", parent: "", position: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", email: "", phone: "", aadhar: "", parent: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border flex  justify-center w-md gap-4 top-0 rounded shadow-md mb-6">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded w-full mb-2" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full mb-2" required />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2 rounded w-full mb-2" required />
      <input type="text" name="aadhar" value={form.aadhar} onChange={handleChange} placeholder="Aadhar Number" className="border p-2 rounded w-full mb-2" required />

      {/* Select Parent Dropdown */}
      <select name="parent" value={form.parent} onChange={handleChange} className="border p-2 rounded w-full mb-2">
        <option value="">Select Parent</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>

      {/* Select Position Dropdown */}
      <select name="position" value={form.position} onChange={handleChange} className="border p-2 rounded w-full mb-2">
        <option value="">Select Position</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white h-10 rounded w-full">Add User</button>
    </form>
  );
};

export default UserForm;
