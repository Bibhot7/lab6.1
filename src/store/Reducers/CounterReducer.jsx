const counterReducer = (state, action) => {
  switch (action.type) { // switch statements are common in reducers
  case "increment":
  return state + 1;
  case "increment20":
    return state +20;
  case "decrement":
  return state - 1;
  case "decrement20":
  return state -20;
  case "Reset":
    return 0;
  default:
  return state;

  }
  };
  export default counterReducer;