import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.GET_CLIENTS:
      console.log("reducer");
      break;
    case Types.FILTER_CLIENT:
      return {
        ...state,
        filtered: state.clients.filter(client => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            client.name.match(regex) ||
            client.proDes.match(regex) ||
            client.projNumber.match(regex)
          );
        })
      };
    default:
      return state;
  }
};
