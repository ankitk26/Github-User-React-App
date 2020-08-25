import React, { useContext } from "react";
import { UserContext } from "../UserContext";

import Loader from "../Loader";
import Avatar from "./Avatar";
import BasicInfo from "./BasicInfo";

const UserInfo = () => {
  const { reducers } = useContext(UserContext);
  // Bringind necessary state from Context
  const { error, loading, user, block } = reducers.state;

  // Show any erorr
  return error ? (
    <p className="w-10/12 mt-10 bg-red-500 text-white text-lg p-2 rounded lg:w-1/3 mx-auto text-center">
      {error}
    </p>
  ) : // Show loader while data loads
  loading ? (
    <Loader />
  ) : (
    <div
      className="w-screen bg-gray-300 mx-auto my-10 p-5 shadow-2xl md:w-10/12"
      style={{ display: `${block}` }}
    >
      <h1 className="text-center text-2xl my-3 text-blue-600">{user.login}</h1>
      <div className="md:grid md:grid-cols-2 md:gap-5">
        {/* Avatar Section of user */}
        <Avatar />
        {/* Other Details of user */}
        <BasicInfo />
      </div>
    </div>
  );
};

export default UserInfo;
