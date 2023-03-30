import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = (props) => {
  const [petsOn, setPetsOn] = useState(false);
  const [pets, setPets] = useState([]);
  return (
    <article className="employee">
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <button
        onClick={() => {
          fetch("https://vet-app-0obi.onrender.com/api/pets")
            .then((response) => response.json())
            .then((results) => {
              setPets(results.filter((pet) => pet.employeeId == props.id));
            });
          setPetsOn(!petsOn);
        }}
      >
        Show Pets
      </button>
      {petsOn ? <PetList pets={pets} /> : <></>}
    </article>
  );
};

export default Employee;
