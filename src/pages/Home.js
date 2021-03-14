import React from "react";
import UserInfo from "../components/githubUser/UserInfo";
import UserInputForm from "../components/githubUser/UserInputForm";

const GithubUser = () => {
  return (
    <>
      <UserInputForm />
      <UserInfo />
    </>
  );
};

export default GithubUser;
