import { useParams } from "react-router-dom";
import UserTree from "../components/UserTree";
import { useState, useEffect } from "react";
const initialUsers = [
    { id: 1, name: "Vikas Yadav", parent: null, position: null },
    
    // Vikas's Left & Right
    { id: 2, name: "Raj Verma", parent: "1", position: "left" },
    { id: 3, name: "Neha Gupta", parent: "1", position: "right" },
  
    // Raj's Left & Right
    { id: 4, name: "Amit Sharma", parent: "2", position: "left" },
    { id: 5, name: "Anjali Mishra", parent: "2", position: "right" },
  
    // Neha's Left & Right
    { id: 6, name: "Saurabh Tiwari", parent: "3", position: "left" },
    { id: 7, name: "Ritika Singh", parent: "3", position: "right" },
  
    // More users under Raj
    { id: 8, name: "Rahul Mehta", parent: "2", position: "left" },
    { id: 9, name: "Swati Agarwal", parent: "2", position: "right" },
  
    // More users under Neha
    { id: 10, name: "Nikhil Sharma", parent: "3", position: "left" },
    { id: 11, name: "Priya Yadav", parent: "3", position: "right" },
  
    // Amit's Left & Right (Under Raj)
    { id: 12, name: "Deepak Kumar", parent: "4", position: "left" },
    { id: 13, name: "Pooja Pandey", parent: "4", position: "right" },
  
    // Anjali's Left & Right (Under Raj)
    { id: 14, name: "Manish Dubey", parent: "5", position: "left" },
    { id: 15, name: "Kajal Gupta", parent: "5", position: "right" },
  
    // Saurabh's Left & Right (Under Neha)
    { id: 16, name: "Aniket Jha", parent: "6", position: "left" },
    { id: 17, name: "Komal Sinha", parent: "6", position: "right" },
  
    // Ritika's Left & Right (Under Neha)
    { id: 18, name: "Sunny Rathi", parent: "3", position: "left" },
    { id: 19, name: "Isha Kapoor", parent: "3", position: "right" },
    // Ritika's Left & Right (Under Neha)
    { id: 18, name: "Sunny2 Rathi", parent: "3", position: "left" },
    { id: 19, name: "Isha Kapoor", parent: "3", position: "right" },
    // Ritika's Left & Right (Under Neha)
    { id: 18, name: "Sunny3 Rathi", parent: "3", position: "left" },
    { id: 19, name: "Isha Kapoor", parent: "3", position: "right" },
    // Ritika's Left & Right (Under Neha)
    { id: 18, name: "Sunny4 Rathi", parent: "4", position: "left" },
    { id: 19, name: "Isha Kapoor", parent: "4   ", position: "right" },
  ];
  

const TreeView = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const user = users.find((u) => u.id === parseInt(userId));
    setSelectedUser(user);
  }, [userId, users]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Tree View</h1>
      {selectedUser ? <UserTree users={users} selectedUser={selectedUser} /> : <p>User not found</p>}
    </div>
  );
};

export default TreeView;
