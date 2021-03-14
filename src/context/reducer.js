import {
  USER_FETCH_ERROR,
  USER_REPOS_SUCCESS,
  USER_FETCH_SUCCESS,
  SET_ERROR,
  CLEAR_ERROR,
  START_FETCHING,
  CLEAR_ALL,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload, user: null };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case START_FETCHING:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        block: action.payload.block,
        input: action.payload.input,
        loading: false,
        error: null,
      };
    case USER_FETCH_ERROR:
      return {
        ...state,
        block: action.payload.block,
        error: action.payload.error,
        loading: false,
      };
    case USER_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_ALL:
      return {
        ...state,
        loading: false,
        user: null,
        error: null,
        repos: null,
      };
    default:
      return state;
  }
};

export default reducer;
