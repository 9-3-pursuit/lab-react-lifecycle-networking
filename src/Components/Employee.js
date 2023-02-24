import PetList from "./PetList";
import "../styles/Employee.css";
import { useState } from "react";
import { formatEmployeeName } from "../utils/formatEmployeeName";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);
  const showPetsClick = () => setShowPets(!showPets);

  return (
    <article className="employee">
      <h3>{formatEmployeeName(employee)}</h3>
      <h4>{employee.title}</h4>
      <button onClick={showPetsClick}>{showPets ? "Hide Pets" : "Show Pets"}</button>
      {showPets ? <PetList employeeID={employee.id} /> : null}
    </article>
  );
};

export default Employee;
