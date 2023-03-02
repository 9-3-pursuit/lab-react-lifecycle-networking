import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({employee}) => {
  const [pets, setPets] = useState(false);

  function togglePets() {
    setPets(!pets);
  }

  return ( 
    <article className="employee">
      <h3> {employee.prefix} {employee.firstName} {employee.lastName}, {employee.postfix}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => togglePets()}>Show Pets</button>
      {pets ? <PetList /> : null}
    </article>
  )
};