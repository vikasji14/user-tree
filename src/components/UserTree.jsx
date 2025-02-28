
import React, { useState } from "react";

const UserTree = ({ users, selectedUser }) => {
  const [showMore, setShowMore] = useState(false);

  // Get children based on parent ID
  const getChildren = (id) => users.filter((user) => user.parent === id.toString());

  // Get left & right children
  const leftChildren = getChildren(selectedUser.id).filter((u) => u.position === "left");
  const rightChildren = getChildren(selectedUser.id).filter((u) => u.position === "right");

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">{selectedUser.name}'s Family</h2>

      {/* Show Left & Right Child Counts */}
      <div className="flex justify-center gap-6 mb-4">
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Left: {leftChildren.length}
        </div>
        <div className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">
          Right: {rightChildren.length}
        </div>
      </div>

      {/* Tree Structure */}
      <div className="flex flex-col items-center">
        {/* Parent */}
        <div className="relative">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold">
            {selectedUser.name}
          </div>

          {/* Connecting Line */}
          {(leftChildren.length > 0 || rightChildren.length > 0) && (
            <div className="absolute top-full left-1/2 w-1 h-6 bg-blue-500"></div>
          )}
        </div>

        {/* Left & Right Children */}
        <div className="flex justify-center gap-16 mt-4">
          {/* Left Side */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Left</h3>
            <div className="relative">
              {leftChildren.map((user) => (
                <div key={user.id} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md mb-2">
                  {user.name} {user.phone}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Right</h3>
            <div className="relative">
              {rightChildren.map((user) => (
                <div key={user.id} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md mb-2">
                  {user.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTree;
