

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FcCellPhone } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// const UserTree = () => {
//   const { id } = useParams();
//   const users = useSelector((state) => state.users);
//   const selectedUser = users.find((user) => user.id === parseInt(id));
//   const navigate = useNavigate();
//   const getChildren = (userId, position) =>
//     users.filter((user) => user.parent === userId.toString() && user.position === position);

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-md mx-auto">
//       <h2 className="text-2xl font-bold underline">{selectedUser?.name}'s Family</h2>
    
     

//       <div className="flex justify-center gap-8 mt-6">
//         <TreeNode title="Left" users={getChildren(id, "left")} />
//         <TreeNode title="Right" users={getChildren(id, "right")} />
//       </div>
//     </div>
//   );
// };

// const TreeNode = ({ title, users }) => {
//   const [expanded, setExpanded] = useState(false);
  

//   return (
//     <div className="text-center flex flex-col w-lg">
//        <p className="mt-2 font-bold text-gray-400 cursor-not-allowed">
//   Total: {users.length}
// </p>
      
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       {users.length === 0 ? (
//         <p className="text-gray-500">No</p>
//       ) : (
//         <>
//           {users.slice(0, 1).map((user) => (
//             <p key={user.id} className="bg-gray-200 flex flex-col items-center gap-2 px-3 py-1 mt-1 rounded">{user.name}  <span className="flex items-center gap-2"> <FcCellPhone size={25}/> {user.phone}</span></p>
//           ))}
//           {users.length > 1 && (
//             <>
//               {expanded && users.slice(1).map((user) => (
//                 <>
//                 <p key={user.id} className="bg-gray-200 flex flex-col items-center gap-2 px-3 py-1 mt-1 rounded">{user.name}  <span className="flex items-center gap-2"> <FcCellPhone size={25}/> {user.phone}</span></p>
//                 <button onClick={() => navigate(`${user.name}`)} className="bg-blue-500 text-white px-3 py-1 rounded">
//                     {user.id}
//                   </button>
//                 </>

//               ))}
//               <button
//                 onClick={() => setExpanded(!expanded)}
//                 className="mt-2 text-blue-500 hover:underline"
//               >
//                 {expanded ? "See Less" : "See More"}
//               </button>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserTree;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FcCellPhone } from "react-icons/fc";

const UserTree = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const selectedUser = users.find((user) => user.id === parseInt(id));
  const navigate = useNavigate();

  const getChildren = (userId, position) =>
    users.filter((user) => user.parent === userId.toString() && user.position === position);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold underline">{selectedUser?.name}'s Family</h2>

      <div className="flex justify-center gap-8 mt-6">
        <TreeNode title="Left" users={getChildren(id, "left")} navigate={navigate} />
        <TreeNode title="Right" users={getChildren(id, "right")} navigate={navigate} />
      </div>
    </div>
  );
};

const TreeNode = ({ title, users, navigate }) => {
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
          <p
          key={user.id}
          className="bg-gray-200 flex flex-col items-center gap-2 px-3 py-1 mt-1 rounded cursor-pointer relative group overflow-hidden"
          onClick={() => navigate(`/tree/${user.id}`)}
        >
          {user.name}
          <span className="flex items-center gap-2">
            <FcCellPhone size={25} /> {user.phone}
          </span>
        
          {/* Tooltip on Hover */}
          <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity z-10">
            Show Family
          </span>
        </p>
        
          ))}
          {users.length > 1 && (
            <>
              {expanded &&
                users.slice(1).map((user) => (
                  <p
                  key={user.id}
                  className="bg-gray-200 flex flex-col items-center gap-2 px-3 py-1 mt-1 rounded cursor-pointer relative group overflow-hidden"
                  onClick={() => navigate(`/tree/${user.id}`)}
                >
                  {user.name}
                  <span className="flex items-center gap-2">
                    <FcCellPhone size={25} /> {user.phone}
                  </span>
                
                  {/* Tooltip on Hover */}
                  <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    Show Family
                  </span>
                </p>
                
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
