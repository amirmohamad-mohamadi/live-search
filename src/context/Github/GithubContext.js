import { createContext, useReducer } from "react";

import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const searchUser = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    console.log(response);
    const { items } = await response.json();
    console.log(response.data);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
