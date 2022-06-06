import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../actions";
import {
 Typography,
 Grid,
 Container,
 Card,
 TextField,
 Button,
} from "@material-ui/core";

const ContactList = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getContacts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 const contacts = useSelector((state) => state);

 console.log(contacts);

 const contactContext = useContext(ContactContext);
 const { postContact } = contactContext;

 const [fields, setFields] = useState({
  name: "",
  email: "",
  phone: "",
 });

 const [createState, setCreateState] = useState(false);

 const handleChange = (e) => {
  setFields({ ...fields, [e.target.name]: e.target.value });
 };

 return (
  <Container>
   <Typography variant='h5'>Your Contacts</Typography>
   {createState === false && (
    <Button onClick={() => setCreateState((prevState) => !prevState)}>
     Add A New Contact
    </Button>
   )}

   {createState === true && (
    <Card style={{ width: "266px", marginBottom: "5px" }}>
     <Button onClick={() => setCreateState((prevState) => !prevState)}>
      Cancel
     </Button>
     <Button
      onClick={() => {
       postContact(fields) && setCreateState(false);
      }}>
      Save Contact
     </Button>

     {Object.keys(fields).map((k) => (
      <TextField
       fullWidth
       key={k}
       label={k.slice(0, 1).toUpperCase() + k.slice(1, k.length)}
       name={k}
       value={fields[k]}
       onChange={handleChange}></TextField>
     ))}
    </Card>
   )}
   <Grid container spacing={2}>
    {contacts &&
     contacts.map((contact) => (
      <Grid xs={3} item key={contact.id}>
       <ContactItem cont={contact} />
      </Grid>
     ))}
   </Grid>
  </Container>
 );
};

export default ContactList;
