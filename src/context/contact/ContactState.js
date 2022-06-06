import React from "react";
import ContactContext from "./contactContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getContacts } from "../../actions";

const ContactState = (props) => {
 const dispatch = useDispatch();

 const postContact = async (entry) => {
  await axios.post("https://tester.crs-consulting.com/api/entry", entry);

  dispatch(getContacts());
 };

 const putContact = async (entry) => {
  await axios.put("https://tester.crs-consulting.com/api/entry", entry);

  dispatch(getContacts());
 };

 const deleteContact = async (id) => {
  await axios.delete(`https://tester.crs-consulting.com/api/entry?id=${id}`);

  dispatch(getContacts());
 };

 return (
  <ContactContext.Provider
   value={{
    postContact,
    getContacts,
    putContact,
    deleteContact,
   }}>
   {props.children}
  </ContactContext.Provider>
 );
};

export default ContactState;
