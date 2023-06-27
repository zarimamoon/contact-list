import "./index.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
          // Render selected contact view
          <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        // Render contact list
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}      
    </>
  )
}


