import tamreenApi from "../../api/tamreen";

export const loadAllUsers = () => async (dispatch, getState) => {
  try {
    const response = await tamreenApi.get(
      `/users`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
        },
      }
    );
    dispatch({ type: "loadAllUsers", payload: response.data.users });
  } catch (error) {
    console.log(`Error in loadAllUser is ${error}`);
  }
};
