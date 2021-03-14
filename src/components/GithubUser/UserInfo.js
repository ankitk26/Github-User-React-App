import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import Loader from "../../layouts/Loader";
import ErrorMessage from "../../layouts/ErrorMessage";
import Avatar from "./Avatar";
import BasicInfo from "./BasicInfo";

const UserInfo = () => {
  const { error, loading, user } = useContext(UserContext);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  // Show any error
  return (
    user && (
      <div className={`w-screen bg-gray-300 mx-auto my-10 p-5 shadow-2xl md:w-10/12 ${error && !user && "none"}`}>
        <h1 className="my-3 text-2xl text-center text-blue-600">{user.login}</h1>
        <div className="md:grid md:grid-cols-2 md:gap-10">
          {/* Avatar Section of user */}
          <Avatar />
          {/* Other Details of user */}
          <BasicInfo />
        </div>
      </div>
    )
  );
};

export default UserInfo;
