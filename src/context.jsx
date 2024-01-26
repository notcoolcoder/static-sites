import { createContext, useReducer } from "react";

export const StoreLocal = createContext();

const INITIAL_STATE = { url: "https:google.com" };

const storeReducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      return {
        ...state,
        edit: action.value,
      };

    default:
      return state;
  }
};

const useStoreLocal = () => {
  const [store, dispatch] = useReducer(storeReducer, INITIAL_STATE);

  return { store, dispatch };
};

export const Provider = ({ children }) => {
  const { store, dispatch } = useStoreLocal();
  return (
    <StoreLocal.Provider value={{ store, dispatch }}>
      {children}
    </StoreLocal.Provider>
  );
};
