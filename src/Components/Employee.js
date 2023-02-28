import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";


// const BASE_URL = 'https://vet-app-0obi.onrender.com/api'

export const Employee = ({ firstName, lastName, prefix, postfix, title, id }) => {
  
  const [showPets, setShowPets] = useState(false);
 
  const togglePets = () => {
    setShowPets(!showPets);
  }

  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName}, {postfix} </h3>
      <h4>{title}</h4>
      <button onClick={togglePets}>{showPets ? 'Hide Pets' : 'Show Pets'}</button> 
      {showPets && <PetList id={id} />}
    </article>
  );
};

export default Employee;
