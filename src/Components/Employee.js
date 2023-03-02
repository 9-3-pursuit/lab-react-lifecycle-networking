import { useState } from "react"
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {

  const [showPets, setShowPets] = useState(false);

  const formatEmployeeName = (employeeToFormat) => {
    const newPostFix = employee.postfix ? `, ${employee.postfix}` : "";
    return `${employee.prefix} ${employee.firstName} ${employee.lastName} ${newPostFix}`;
  };
  return (
    <article className="employee">
      <h3>{formatEmployeeName(employee)}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => { setShowPets(!showPets) }}>Show Pets</button>
      {showPets && <PetList employeeId={employee.id} />}
    </article>
  );
};

export default Employee;
