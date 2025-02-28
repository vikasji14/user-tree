import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import UserTable from "../components/Table";

const initialUsers = [
  { id: 1, name: "Vikas Yadav", email: "vikas@example.com", phone: "9876543210", aadhar: "123412341234", parent: null, position: null },
  { id: 2, name: "Raj Verma", email: "raj@example.com", phone: "8765432109", aadhar: "234523452345", parent: "1", position: "left" },
  { id: 3, name: "Neha Gupta", email: "neha@example.com", phone: "7654321098", aadhar: "345634563456", parent: "1", position: "right" },
  { id: 4, name: "Amit Sharma", email: "amit@example.com", phone: "6543210987", aadhar: "456745674567", parent: "2", position: "left" },
  { id: 5, name: "Anjali Mishra", email: "anjali@example.com", phone: "5432109876", aadhar: "567856785678", parent: "2", position: "right" }
];

const Home = () => {
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Management System</h1>
      <UserForm addUser={addUser} users={users} />
      <UserTable users={users} navigate={navigate} />
    </div>
  );
};

export default Home;
