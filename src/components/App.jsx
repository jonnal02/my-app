import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        ln={contacts[0].ln}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
        ln={contacts[1].ln}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        ln={contacts[2].ln}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
        ln={contacts[3].ln}
      />
      <Card
        name={contacts[4].name}
        img={contacts[4].imgURL}
        tel={contacts[4].phone}
        email={contacts[4].email}
        ln={contacts[4].ln}
      />
    </div>
  );
}

export default App;
