export default (state = [], action) => {
  switch (action.type) {
    case "createStudio":
      return action.payload;

    default:
      return state;
  }
};
