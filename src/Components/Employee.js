import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";


export const Employee = ({employee}) => {
  const [showPets, setShowPets] = useState(false);
  

  function togglePetList () {
    setShowPets(!showPets)
  }


  return (
    <article className="employee">
      <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName}${employee.postfix ? `, ${employee.postfix}` : ""}`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => togglePetList()}>Show Pets</button>
      {showPets ? <PetList /> : null}
    </article>
  );
};

export default Employee;
