import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false)
  console.log(showPets)
  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName}{employee.postfix && `, ${employee.postfix}`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => { setShowPets(!showPets) }}>Show Pets</button>
      <PetList employeeId={employee.id} />
    </article>
  )

};

export default Employee;
