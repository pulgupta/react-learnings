const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /**
         * We can't directly change the state object hence we are creating a new 
         * object using the spread operator and returning the newly created object.
         * In this way we are not modifying what is currently present in the state
         * but are just returning new object
         */
      case "ADD_COUNTER":
        return {
          ...state,
          counter: state.counter + action.payload.value,
        };
      case "INC_COUNTER":
        return {
          ...state,
          counter: state.counter + 1,
        };
      default:
        return state;
    }

};

export default reducer;