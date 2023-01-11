import React from "react";
import contacts from "../contacts";
import Card from "./Card"


function App() {
  return (
   <Card
   name={contacts[0].name}
   img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
   />
  );
}

export default App;
