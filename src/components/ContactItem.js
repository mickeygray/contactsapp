import { TextField, Typography, Button, Card } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ContactContext from "../context/contact/contactContext";
const ContactItem = ({ cont }) => {
 const contactContext = useContext(ContactContext);

 const { putContact, deleteContact } = contactContext;

 const { id } = cont;

 const [fields, setFields] = useState({
  name: "",
  email: "",
  phone: "",
  id,
 });

 const handleChange = (e) => {
  setFields({ ...fields, [e.target.name]: e.target.value });
 };

 const [editState, toggleEditState] = useState(false);

 const passContToFields = (k) => {
  setFields({ ...fields, [k]: cont[k] });
 };

 return (
  <Card>
   <Button onClick={() => toggleEditState((prevState) => !prevState)}>
    {editState === false ? "Edit Contact" : "Cancel Edit"}
   </Button>
   {editState === true ? (
    <Button
     onClick={() => {
      putContact(fields) && toggleEditState(false);
     }}>
     Save Edits
    </Button>
   ) : (
    <Button style={{ float: "right" }} onClick={() => deleteContact(id)}>
     X
    </Button>
   )}

   {editState === false ? (
    <>
     {Object.keys(cont)
      .filter((f) => f !== "id")
      .map((k) => (
       <Typography key={k}>
        {k.slice(0, 1).toUpperCase() + k.slice(1, k.length)}:{cont[k]}
       </Typography>
      ))}
    </>
   ) : (
    <>
     {Object.keys(fields)
      .filter((f) => f !== "id")
      .map((k) => (
       <TextField
        onClick={() => passContToFields(k)}
        fullWidth
        key={k}
        label={k.slice(0, 1).toUpperCase() + k.slice(1, k.length)}
        name={k}
        value={fields[k]}
        onChange={handleChange}></TextField>
      ))}
    </>
   )}
  </Card>
 );
};

export default ContactItem;
