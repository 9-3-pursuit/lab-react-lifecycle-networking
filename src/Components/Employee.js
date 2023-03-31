import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ( {employee}) => {


const [showPets, setShowPets] = useState(false)

const formatEmployeeName = (employee) => {
  const postFix = employee.postfix ? `, ${employee.postfix}` : "";
  return `${employee.prefix} ${employee.firstName} ${employee.lastName}${postFix}`;
};

  return (
    <article className="employee">
      <h3>{formatEmployeeName(employee)}</h3>
      <h4>Staff Member Title {employee.title}</h4>
      <button onClick={() => {setShowPets(!showPets)}}>Show Pets</button>
      {showPets && <PetList employeeId={employee.id} /> }
       {/* an identifier for when i pass to petList */}
    </article>
  );
};

export default Employee;