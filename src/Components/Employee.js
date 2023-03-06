import { useState } from "react"
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  // creating state variable showPets and setting it boolean value false
  const [showPets, setShowPets] = useState(false);

  // creating helper function to format employee name 
  const formatEmployeeName = (employeeToFormat) => {
    // using ternary operator to determine value of newPostFix variable 
    const newPostFix = employee.postfix ? `, ${employee.postfix}` : "";
    // returnin formatted employee name 
    return `${employee.prefix} ${employee.firstName} ${employee.lastName}${newPostFix} `;
  };
  return (
    <article className="employee">
      {/* calling formatEmployeeName function in JSX */}
      <h3>{formatEmployeeName(employee)}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => { setShowPets(!showPets) }}>Show Pets</button>
      {showPets && <PetList employeeId={employee.id} />}
    </article>
  );
};

export default Employee;
