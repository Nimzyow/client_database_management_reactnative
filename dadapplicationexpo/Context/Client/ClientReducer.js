import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.GET_CLIENTS:
      console.log("reducer");
      break;
    default:
      return state;
  }
};
