
import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";
import { formatEmployee } from "./utils/format";


export const Employee = ({
  firstName,
   lastName, 
   prefix, 
   postfix, 
   title 
  }) => {

    const [showPets, setShowPets] = useState(false)

  return (
    <article className="employee">
      <h3>{formatEmployee(firstName,lastName,prefix,postfix,title)}</h3>
      <h4>{title}</h4>
      <button onClick={() => { setShowPets((oldShowPets) => !oldShowPets);
      }}>
      {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets && <PetList />}
      </article>
    
  );
};

export default Employee;