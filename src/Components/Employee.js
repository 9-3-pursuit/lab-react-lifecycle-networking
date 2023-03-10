import PetList from "./PetList";
import "./Employee.css";
import { formatEmployee } from "./Utility/format";
import { useState } from "react";

export const Employee = ({
  id,
  firstName,
  lastName,
  prefix,
  postfix,
  title,
}) => {
  const [showPets, setShowPets] = useState(false);
  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
      <h3>{formatEmployee(firstName, lastName, prefix, postfix, title)}</h3>
      <h4>{title}</h4>
      <button
        onClick={() => {
          setShowPets(!showPets);
        }}
      >
        {" "}
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets && <PetList id={id} />}
    </article>
  );
};

export default Employee;
