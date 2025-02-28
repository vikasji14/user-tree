import React from "react";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import UserTree from "./pages/UserTree";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">User Management System</h1>
      
      <Routes>
        <Route path="/" element={<><UserForm /><UserTable /></>} > </Route>
        <Route path="/tree/:id" element={<UserTree />} />
      </Routes>
    </div>
  );
};

export default App;
