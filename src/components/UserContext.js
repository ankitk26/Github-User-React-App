import React, { createContext, useReducer } from "react";
import axios from "axios";

// Initial state
const initialState = {
  user: "",
  block: "none",
  error: false,
  loading: false,
  repos: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_USERNAME":
      return { ...state, input: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "USER_FETCH_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        block: action.payload.block,
        input: action.payload.input,
      };
    case "USER_FETCH_ERROR":
      return {
        ...state,
        block: action.payload.block,
        error: action.payload.error,
      };
    case "USER_REPOS_SUCCESS":
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialization of useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const USER_URL = "https://api.github.com/users";

  // Fetch user's information
  const fetchUser = async (input) => {
    dispatch({ type: "ERROR", payload: false });
    dispatch({ type: "LOADING", payload: true });
    await axios
      .get(`${USER_URL}/${input}`)
      .then((res) => {
        dispatch({
          type: "USER_FETCH_SUCCESS",
          payload: { user: res.data, block: "block" },
        });
      })
      .catch(() => {
        dispatch({
          type: "USER_FETCH_ERROR",
          payload: { block: "none", error: "No user found" },
        });
      });
    dispatch({ type: "LOADING", payload: false });
  };

  // Fetch User's repos
  const fetchRepos = async (REPOS_URL) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const res = await axios.get(REPOS_URL);
      dispatch({ type: "USER_REPOS_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err);
    }
    dispatch({ type: "LOADING", payload: false });
  };

  return (
    <UserContext.Provider
      value={{
        fetchUser,
        fetchRepos,
        reducers: { state, dispatch },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
