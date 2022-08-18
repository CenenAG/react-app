import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import {Saludar} from './Saludar'
import { Button } from "./Button";
import {Posts} from './Posts'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Posts />
  </>
);
