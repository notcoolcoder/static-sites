import { createContext, useReducer } from "react";
import { fetchs } from "./assets/Data";
export const StoreLocal = createContext();

const INITIAL_STATE = { note: fetchs };

const storeReducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      return {
        ...state,
        edit: action.value,
      };
    case "ADD":
      return {
        ...state,
        note: [...state?.note, action.payload].sort((a, b) => {
          return parseInt(b.date) - parseInt(a.date);
        }),
      };

    case "DELETE":
      return {
        ...state,
        note: state.note.filter((list, index) => index !== action.value),
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
