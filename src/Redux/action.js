import { GET_ALL_PRODUCTS } from "./actiontypes";

const appThunkActionCreator = (url) => {
  return function appThunk(dispatch, getState) {
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: resData,
        });
      })
      .catch((e) => {
        console.log("Error in action");
        console.log(e);
      });
  };
};
export default appThunkActionCreator;