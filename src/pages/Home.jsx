import React from "react";
import UserForm from "../components/UserForm";
import Table from "../components/UserTable";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">User Tree Management</h1>
      <UserForm />
      <Table/>
    </div>
  );
};

export default Home;
