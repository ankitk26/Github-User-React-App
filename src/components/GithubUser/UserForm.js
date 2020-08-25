import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

function UserForm() {
  const { reducers, fetchUser } = useContext(UserContext);
  const { dispatch } = reducers;
  const [input, setInput] = useState("");

  // Handling submit event
  const handleSubmit = (e) => {
    dispatch({ type: "ERROR", payload: false });
    e.preventDefault();
    // Fetch user's info
    if (input) fetchUser(input);
    else dispatch({ type: "ERROR", payload: "Please enter username" });
    setInput("");
  };

  return (
    <form
      className="text-center sm:text-xl mt-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter Github username"
        className="p-2 border-b-2 border-gray-300 focus:outline-none md:mr-20 focus:border-blue-400"
        value={input}
        spellCheck="false"
        autoComplete="on"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="md:mt-0 md:w-1/5 bg-blue-500 mt-5 w-10/12 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Find user
      </button>
    </form>
  );
}

export default UserForm;
