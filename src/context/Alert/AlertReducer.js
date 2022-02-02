const alertReducer = (state, action) => {
  switch (action.type) {
    case "LERT_REDUCER":
      return action.payload;

    case "REMOVE_REDUCER":
      return null;

    default:
      return state;
  }
};

export default alertReducer;
