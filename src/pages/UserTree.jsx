// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const UserTree = () => {
//   const { id } = useParams();
//   const users = useSelector((state) => state.users);
//   const selectedUser = users.find((user) => user.id === parseInt(id));

//   const getChildren = (userId, position) => users.filter((user) => user.parent === userId.toString() && user.position === position);

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold">{selectedUser?.name}'s Tree</h2>
//       <div className="flex justify-center gap-8 mt-4">
//         <div>
//           <h3 className="text-lg font-semibold">Left</h3>
//           {getChildren(id, "left").map((user) => <p key={user.id}>{user.name}</p>)}
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Right</h3>
//           {getChildren(id, "right").map((user) => <p key={user.id}>{user.name}</p>)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserTree;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FcCellPhone } from "react-icons/fc";

const UserTree = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const selectedUser = users.find((user) => user.id === parseInt(id));

  const getChildren = (userId, position) =>
    users.filter((user) => user.parent === userId.toString() && user.position === position);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold underline">{selectedUser?.name}'s Family</h2>
    
     

      <div className="flex justify-center gap-8 mt-6">
        <TreeNode title="Left" users={getChildren(id, "left")} />
        <TreeNode title="Right" users={getChildren(id, "right")} />
      </div>
    </div>
  );
};

const TreeNode = ({ title, users }) => {
  const [expanded, setExpanded] = useState(false);
  

  return (
    <div className="text-center flex flex-col w-lg">
       <p className="mt-2 font-bold text-gray-400 cursor-not-allowed">
  Total: {users.length}
</p>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {users.length === 0 ? (
        <p className="text-gray-500">No</p>
      ) : (
        <>
          {users.slice(0, 1).map((user) => (
            <p key={user.id} className="bg-gray-200 flex flex-col items-center gap-2 px-3 py-1 mt-1 rounded">{user.name}  <span className="flex items-center gap-2"> <FcCellPhone size={25}/> {user.phone}</span></p>
          ))}
          {users.length > 1 && (
            <>
              {expanded && users.slice(1).map((user) => (
                <>
                <p key={user.id} className="bg-gray-200 flex flex-col items-center gap-2 px-3 py-1 mt-1 rounded">{user.name}  <span className="flex items-center gap-2"> <FcCellPhone size={25}/> {user.phone}</span></p>
                </>

              ))}
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-blue-500 hover:underline"
              >
                {expanded ? "See Less" : "See More"}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UserTree;
