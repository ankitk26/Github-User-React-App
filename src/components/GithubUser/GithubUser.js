import React from "react";
import UserInfo from "./UserInfo";
import UserForm from "./UserForm";

const GithubUser = () => {
  return (
    <>
      {/* Form to get username */}
      <UserForm />
      {/* Section to display all details of user */}
      <UserInfo />
    </>
  );
};

export default GithubUser;
