const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BASKET": {
      return {
        ...state,
        baskets: [action.payload, ...state.baskets],
      };
    }

    case "DELETE_BASKET": {
      const index = state.baskets.findIndex(
        basket => basket.id === action.payload
      );
      let newBasket = [...state.baskets];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload}) as its not in basket!`
        );
      }
      return {
        ...state,
        baskets: newBasket,
      };
    }

    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
