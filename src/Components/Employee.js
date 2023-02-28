import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";
// import { formatEmployee } from "../utils/format";

export const Employee = ({ API_BASE , id , firstName, lastName, prefix, postfix, title }) => {
  const [showPets, setShowPets] = useState(false)
  const [employeeId, setEmployeeId] = useState("")
  
  let name = `${firstName} ${lastName}`;
    if (prefix) name = `${prefix} ${name}`;
    if (postfix) name = `${name}, ${postfix}`;

  function handleClick(empId) {
    setEmployeeId(empId)
    setShowPets((oldShowPets) => !oldShowPets)
  }


  return (
    <article className="employee">
      <h3>{name}</h3>
      <h4>{title}</h4>
      <button onClick={() => handleClick(id)} > {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets && 
        <PetList
          API_BASE={API_BASE} 
          employeeId={employeeId}
        />
      }

    </article>
  );
};

export default Employee;
