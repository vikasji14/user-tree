import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { toast } from "react-toastify";

const UserForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    parent: "",
    position: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim() ) newErrors.phone = "Phone Number is incorrect";
    if (!form.aadhar.trim()) newErrors.aadhar = "Aadhar Number is incorrect";
    // if (!form.position) newErrors.position = "Select a position";
    if (form.parent && !users.find((u) => u.id === Number(form.parent))) {
      newErrors.parent = "Invalid parent";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUser = { id: users.length + 1, ...form };
    dispatch(addUser(newUser));
    toast.success("Add new user successfully" )
    setForm({ name: "", email: "", phone: "", aadhar: "", parent: "", position: "" });
    setErrors({});
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto">
      <form onSubmit={handleSubmit} className=" flex flex-col lg:flex-row gap-4  w-full">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Aadhar */}
        <div>
          <input
            type="text"
            name="aadhar"
            placeholder="Aadhar Number"
            value={form.aadhar}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          {errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar}</p>}
        </div>

        {/* Parent Selection */}
        <div>
          <select
            name="parent"
            value={form.parent}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Parent (Optional)</option>
            {users?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          {errors.parent && <p className="text-red-500 text-sm">{errors.parent}</p>}
        </div>

        {/* Position Selection */}
        <div>
          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Position(Optional)</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
          {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!form.name || !form.email || !form.phone || !form.aadhar}
          className=" bg-blue-500 text-white p-4 h-12 flex items-center rounded-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
