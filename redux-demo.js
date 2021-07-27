const redux = require("redux");

// reducer func - changes state based on action
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

//create store to hold state
const store = redux.createStore(counterReducer); // tell redux which reducer func should be used to change state
// reducer will be run when store is created

// log initial state
// console.log("initial state:", store.getState());

// subscriber - executes when state changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// register subscriber func to redux / make redux aware of subscriber
store.subscribe(counterSubscriber);

// create and dispatch action
store.dispatch({ type: "increment" }); // no effect other than to run reducer since no conditional in reducer to evaluate the action
store.dispatch({ type: "decrement" });
