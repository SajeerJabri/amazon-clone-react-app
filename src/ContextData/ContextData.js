import React, { createContext, useReducer } from "react";
import Reducer from "../Reducer/Reducer";

const initialData = {
  baskets: [],
  user: null,
};
console.log(initialData);
const ContextData = createContext(initialData);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialData);

  function addBasket(dataObj) {
    dispatch({
      type: "ADD_BASKET",
      payload: {
        id: dataObj.id,
        title: dataObj.title,
        image: dataObj.image,
        price: dataObj.price,
        rating: dataObj.rating,
      },
    });
  }

  function deleteBasket(id) {
    dispatch({
      type: "DELETE_BASKET",
      payload: id,
    });
  }

  function userLogged(authUser) {
    dispatch({
      type: "SET_USER",
      payload: authUser,
    });
  }

  return (
    <ContextData.Provider
      value={{
        baskets: state.baskets,
        user: state.user,
        addBasket,
        deleteBasket,
        userLogged,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
export default ContextData;
