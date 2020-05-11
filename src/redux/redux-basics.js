/**
 * We are doing this demo just by using node so we will use node way of importing
 * dependencies. Hence we are using require insted of import
 */
const redux = require("redux");
const createStore = redux.createStore;

/**
 * Intial state of our redux store
 */
const initialState = {
  counter: 0,
};

/**
 *
 * @param {Current state. if state is not passed that initial state will be used.} state.
 * @param {contains the action type and an optional payload} action
 */
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

/**
 * Takes a reducer as parameter hence we are doing this once we have our reducer ready
 */
const store = createStore(reducer);

/**
 * Subscription
 */
store.subscribe(() => {
    console.log('Current data in store ', store.getState());
})

/**
 * Firing actions
 */
store.dispatch({ type: "INC_COUNTER"});
store.dispatch({ type: "ADD_COUNTER", payload: { value: 100 } });



