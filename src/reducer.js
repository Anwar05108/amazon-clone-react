export const initialState = {
  basket: [
    {
      id: "1242453",
      title:
        "Brita Water Replacement Filters for Pitchers and Dispensers, 3 Count, White",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
