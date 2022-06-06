import axios from "axios";

export const getContacts = () => {
 return async (dispatch, getState) => {
  const res = await axios.get("https://tester.crs-consulting.com/api/entries");

  console.log(res.data);

  dispatch({
   type: "GET_CONTACTS",
   payload: res.data,
  });
 };
};
