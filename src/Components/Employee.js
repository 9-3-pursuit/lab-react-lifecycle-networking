import PetList from "./PetList";
import "./Employee.css";

import { useState } from "react";



export const Employee = ({firstName, lastName, prefix, postfix, title}) => {
  const [showPets, setShowPets]= useState(false)
  return (
    <article className="employee">
      {/* <h3>formatEmployee</h3> */}
      <h3>{prefix ? prefix: null} {firstName} {lastName} {postfix ? postfix: null}</h3>
      <h4>{title}</h4>
      <button onClick={() => {setShowPets(!showPets)}}>
        {showPets ? "Hide Pets": "Show Pets"}
        </button>
     {showPets && <PetList />}
    </article>
  );
};

export default Employee;
