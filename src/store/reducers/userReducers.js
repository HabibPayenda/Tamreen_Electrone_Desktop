export default (state = [], action) => {
  switch (action.type) {
    case "loadAllUsers":
      return action.payload;

    default:
      return state;
  }
};
