const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_TO_CART = 'ADD_TO_CART';

const bookState = {
  cartItems: []
}

const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isContains = state.cartItems.includes(action.payload);

      if (!isContains)
        state.cartItems.push(action.payload);

      return {
        ...state,
        cartItems: state.cartItems
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export {bookReducer, bookState, REMOVE_FROM_CART, ADD_TO_CART};
