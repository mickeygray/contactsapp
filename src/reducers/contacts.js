const initState = [];

const contactsReducer = (state = initState, action) => {
 switch (action.type) {
  case "GET_CONTACTS":
   console.log(action);
   return action.payload;
  default:
   return state;
 }
};

export default contactsReducer;
