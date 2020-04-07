const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "MULTI":
      return state * action.payload;
    case "ZERO":
      return state * 0;
    default:
      return state;
  }
};
export default reducer;
