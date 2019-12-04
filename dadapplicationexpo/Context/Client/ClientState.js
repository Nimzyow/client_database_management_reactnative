import React, { useReducer } from "react";
import ClientContext from "./ClientContext";
import ClientReducer from "./ClientReducer";
import * as Types from "../Types";

const ClientState = props => {
  const initialState = {
    clients: [
      {
        name: "Nima Soufiani",
        email: "n_soufiani@hotmail.com",
        phone: "07539347027",
        phone2: "",
        type: "job not accepted",
        proDes: "this is a project adn it is an asdnsaoi sadoi jasdo a",
        numberAndStreet: "22 Kingswood Road",
        secondLineAdd: "Ilford",
        thirdLineAdd: "",
        postCode: "IG3 8UE",
        projNumber: "123456"
      },
      {
        name: "Roger Federer",
        email: "fereder@federer.com",
        phone: "13518564521",
        phone2: "",
        type: "job accepted",
        proDes:
          "roger federer is a tennis player and he sometimes plays at wimbeldon",
        numberAndStreet: "roger house",
        secondLineAdd: "swizz",
        thirdLineAdd: "",
        postCode: "RM9 8SD",
        projNumber: "159783"
      },
      {
        name: "Sandy man",
        email: "sandy@rer.com",
        phone: "78946321",
        phone2: "",
        type: "job not accepted",
        proDes: "sandy is a sandy and sandy and is in a pineapple",
        numberAndStreet: "sandy",
        secondLineAdd: "spongebob",
        thirdLineAdd: "",
        postCode: "pineapple",
        projNumber: "156146"
      },
      {
        name: "Sandy man",
        email: "sandy@rer.com",
        phone: "78946321",
        phone2: "",
        type: "job not accepted",
        proDes: "sandy is a sandy and sandy",
        numberAndStreet: "sandy",
        secondLineAdd: "spongebob",
        thirdLineAdd: "",
        postCode: "pineapple",
        projNumber: "67552523"
      },
      {
        name: "Sandy man",
        email: "sandy@rer.com",
        phone: "78946321",
        phone2: "",
        type: "job not accepted",
        proDes: "Planning permission and rear extension for a 4 bedroom house",
        numberAndStreet: "sandy",
        secondLineAdd: "spongebob",
        thirdLineAdd: "",
        postCode: "pineapple",
        projNumber: "34535"
      },
      {
        name: "Sandy man",
        email: "sandy@rer.com",
        phone: "78946321",
        phone2: "",
        type: "job not accepted",
        proDes: "sandy is a sandy and sandy perhaps even in a spaceship?",
        numberAndStreet: "sandy",
        secondLineAdd: "spongebob",
        thirdLineAdd: "",
        postCode: "pineapple",
        projNumber: "1234235"
      }
    ]
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  return (
    <ClientContext.Provider
      value={{
        clients: state.clients
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientState;
