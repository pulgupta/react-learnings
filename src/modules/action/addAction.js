const types = {
  ADD_COUNTER: "ADD_COUNTER",
  INC_COUNTER: "INC_COUNTER",
};
/**
 * The synchronous method which returns what the action payload and type
 * @param {Value to add to the counter} data
 */
const addCounterSync = (data) => {
  return {
    type: types.ADD_COUNTER,
    payload: {
      value: data,
    },
  };
};

/**
 * This is a async mehod which return a fucntion with our async call
 * @param {Value to add to the counter} data
 */
const addCounterAsyncAction = (data) => {
  // We are getting dispatch here due to thunk
  return (dispatch) => {
    // Example of our async call(Just like axios we are getting a promise)
    dummyMethod(data).then((dataFromServer) => {
      dispatch(addCounterSync(dataFromServer));
    });
  };
};

/**
 * Assume this as our axios call
 */
const dummyMethod = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[Action] in service time");
      resolve(data + 0.1);
    }, 2500);
  });
};

export { types };
export default addCounterAsyncAction;
