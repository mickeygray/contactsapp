import "./App.css";
import ContactState from "./context/contact/ContactState";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
 return (
  <ContactState>
   <Router>
    <Routes>
     <Route exact path='/' element={<ContactList />} />
    </Routes>
   </Router>
  </ContactState>
 );
}

export default App;
