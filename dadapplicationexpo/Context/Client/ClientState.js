import React, { useReducer } from "react";
import ClientContext from "./ClientContext";
import ClientReducer from "./ClientReducer";
import * as Types from "../Types";

const ClientState = props => {
  initialState: {
    something: null;
  }

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  return (
    <ClientContext.Provider
      value={{
        something: state.something
      }}
    ></ClientContext.Provider>
  );
};

export default ClientState;
