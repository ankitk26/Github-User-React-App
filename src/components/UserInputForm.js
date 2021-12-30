import { useState } from "react";
import { useUser } from "../context/UserContext";

const UserForm = () => {
  const [input, setInput] = useState("");
  const { fetchUser, setError, clearAll } = useUser();

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      fetchUser(input);
    } else {
      setError("Please enter username");
    }
    setInput("");
  };

  const handleClear = () => {
    setInput("");
    clearAll();
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-4/5 mx-auto mt-10 text-base text-center md:gap-8 md:flex-row md:justify-center md:items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter User's GitHub username"
        className="w-full p-2 text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 md:w-1/4"
        value={input}
        onChange={handleInputChange}
      />

      <div className="flex items-center justify-center w-full gap-4 md:w-auto">
        <button
          type="submit"
          className="px-5 py-2 mt-5 text-white bg-blue-500 rounded md:text-sm md:mt-0 md:w-auto hover:bg-blue-600 focus:outline-none"
        >
          Find user
        </button>

        <button
          type="button"
          className="px-5 py-2 mt-5 text-white bg-blue-500 rounded md:text-sm md:mt-0 md:w-auto hover:bg-blue-600 focus:outline-none"
          onClick={handleClear}
        >
          Clear all
        </button>
      </div>
    </form>
  );
};

export default UserForm;
