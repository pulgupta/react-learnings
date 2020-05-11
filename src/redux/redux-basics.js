/**
 * We are doing this demo just by using node so we will use node way of working
 * Hence we are using require insted of import
 */
const redux = require("redux");
const createStore = redux.createStore;

/**
 * Intial state of our store
 */
const initialState = {
  counter: 0,
};

/**
 *
 * @param {Current state} state -> if state is not passed that initial state will be used.
 * @param {*} action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
      // We can't directly change the state object hence we are creating a new 
      // object using teh spread operator and returning the newly created object
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
      break;
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
    console.log(store.getState());
})

/**
 * Firing actions
 */
store.dispatch({ type: "INC_COUNTER"});
store.dispatch({ type: "ADD_COUNTER", payload: { value: 100 } });



