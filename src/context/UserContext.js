import React, { createContext, useReducer } from "react";
import axios from "axios";

import reducer from "./reducer";
import {
  CLEAR_ERROR,
  SET_ERROR,
  USER_FETCH_ERROR,
  START_FETCHING,
  USER_FETCH_SUCCESS,
  CLEAR_ALL,
  USER_REPOS_SUCCESS,
} from "./actions";

// Initial state
const initialState = {
  user: null,
  error: null,
  loading: false,
  repos: null,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const BASE_URL = "https://api.github.com/users";

  // Fetch user's profile
  const fetchUser = async (input) => {
    dispatch({ type: START_FETCHING });
    try {
      const { data } = await axios.get(`${BASE_URL}/${input}`);
      dispatch({ type: USER_FETCH_SUCCESS, payload: { user: data } });
    } catch (err) {
      console.error(err);
      dispatch({ type: USER_FETCH_ERROR, payload: { error: "No user found" } });
    }
  };

  // Fetch user's repositories
  const fetchRepos = async (user, page) => {
    dispatch({ type: START_FETCHING });
    try {
      const { data } = await axios.get(`${BASE_URL}/${user}/repos?page=${page}`);
      dispatch({ type: USER_REPOS_SUCCESS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  // Set error message and display it to the user
  const setError = (message) => {
    dispatch({ type: SET_ERROR, payload: message });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  // Reset the page
  const clearAll = () => {
    dispatch({ type: CLEAR_ALL });
  };

  const { user, loading, error, repos } = state;

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        loading,
        repos,
        fetchUser,
        fetchRepos,
        setError,
        clearError,
        clearAll,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
