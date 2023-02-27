import PetList from "./PetList";
import "./Employee.css";
import { formatEmployee } from "./utils/format";
import { useState } from "react";


const Employee = ({id,firstName,lastName,prefix,postfix,title }) => {
  const [showPets, setShowPets] = useState(false);
  return (
    <article className="employee">
      <h3>{formatEmployee(firstName,lastName,prefix,postfix,title)}</h3>
      <h4>{title}</h4>
      <button  onClick={() => {setShowPets(!showPets)
      }}> {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets && <PetList id={id}/>}
    </article>
  );
};

export default Employee;