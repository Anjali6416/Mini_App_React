import { GET_ALL_PRODUCTS } from "./actiontypes";
let initState = {
    data:[],
    totalPages: 0
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return { ...state, data: payload.data, totalPages: payload.totalPages };
    default:
      return state;
  }
};

export { reducer };