import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Avatar = () => {
  const { reducers } = useContext(UserContext);
  // Getting user's info from Context
  const { user } = reducers.state;

  return (
    <div className="md:px-10 py-5">
      <img
        src={user.avatar_url}
        alt="avatar"
        style={{
          width: "200px",
          height: "200px",
        }}
        className="mx-auto rounded-full object-contain mb-5 shadow-lg"
      />
      <h2 className="text-center text-xl my-2 text-gray-900">{user.name}</h2>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 mx-auto justify-center w-10/12 text-center md:w-auto">
        <h3>
          <i className="fas fa-user-friends mr-2 text-gray-900"></i>
          <strong className="text-blue-700 ">Following</strong>:{user.following}
        </h3>
        <h3>
          <i className="fas fa-user-friends mr-2 text-gray-900"></i>
          <strong className="text-blue-700">Followers</strong>: {user.followers}
        </h3>
      </div>
    </div>
  );
};

export default Avatar;
