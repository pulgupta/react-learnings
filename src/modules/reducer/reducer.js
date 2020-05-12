import { types } from "../action/addAction";

const initialState = {
    counter: 0,
    history: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /**
         * We can't directly change the state object hence we are creating a new 
         * object using the spread operator and returning the newly created object.
         * In this way we are not modifying what is currently present in the state
         * but are just returning new object
         */
      case types.ADD_COUNTER:
        const ctr = state.counter + action.payload.value;
        return {
          ...state,
          counter: ctr,
          history: state.history.concat(ctr)
        };
      case types.INC_COUNTER:
        const ctr1 = state.counter + 1;
        return {
          ...state,
          counter: ctr1,
          history: state.history.concat(ctr1)
        };
      default:
        return state;
    }

};

export default reducer;