import React, { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({
  firstName,
  lastName,
  prefix,
  postfix,
  title,
  id,
}) => {
  const [showPets, setShowPets] = useState(false);
  const [petNames, setPetNames] = useState("");
  const [hasPets, setHasPets] = useState(false);

  const handleShowPets = () => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        const petNames = data.map((pet) => pet.name).join(", ");
        setPetNames(petNames);
        setHasPets(petNames !== "");
        setShowPets(true);
      });
  };

  return (
    <article className="employee">
      <h3>
        {prefix && `${prefix} `}
        {firstName} {lastName}
        {postfix && `, ${postfix}`}
      </h3>
      <h4>{title}</h4>
      <button onClick={handleShowPets}>Show Pets</button>
      {showPets && (
        <>
          {hasPets ? (
            <PetList petNames={petNames} />
          ) : (
            <p>No pets listed</p>
          )}
        </>
      )}
    </article>
  );
};

export default Employee;
