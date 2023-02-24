import PetList from "./PetList";
import "./Employee.css";
import { helperEmployee } from "../helpers/helperFormat.js";
import { useState } from "react";

// * could use employee inside of the prop space as well
export const Employee = ({
  firstName,
  lastName,
  prefix,
  postfix,
  title }) => {
  const [showPets, setShowPets] = useState(false)
  // * returns employer info W/ show/hide pets button & info
  return (
    <article className="employee">
      <h3>{helperEmployee
        (firstName, lastName, prefix, postfix, title)
      }
      </h3>
      <h4>{title}</h4>
      <button
        onClick={() => { setShowPets((oldShowPets) => !oldShowPets) }}
      >
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets &&
        <PetList
          key={showPets.id}
          pets={showPets.id}
          {...showPets} />}
    </article>
  );
};

export default Employee;
