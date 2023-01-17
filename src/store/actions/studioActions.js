import tamreenApi from "../../api/tamreen";

export const createStudio =
  ({ name, id }) =>
  async (dispatch, getState) => {
    console.log(`Values name in createStudio is : ${name}`);
    try {
      const response = await tamreenApi.post(
        `/studios`,
        { name: name, id: id },
        {
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
          },
        }
      );
      dispatch({ type: "createStudio", payload: response.data.studio });
    } catch (error) {
      console.log(`Error in createStudio is ${error}`);
    }
  };
