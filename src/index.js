import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="Going" />
    {/*  <UserCard
      name="Cenen"
      married={true}
      points={[10, 30, 20]}
      address={{ street: "Av Itson", city: "Obregon" }}
      greet={function () {
        console.log("greet");
      }}
    />
    <UserCard
      name="Jose Javier"
      married={false}
      points={[10, 30, 20]}
      address={{ street: "5th Av", city: "New York" }}
      greet={function () {
        alert("greet");
      }}
    /> */}
  </>
);
