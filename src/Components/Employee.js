import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

const BASE_URL = 'https://vet-app-0obi.onrender.com/api/employees/'

export const Employee = ({ firstName, lastName, prefix, postfix, title, id }) => {
  
  const [showPets, setShowPets] = useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}${id}/pets`)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        console.log(data)

      });
  }, [id]);

  const togglePets = () => {
    setShowPets(!showPets);
  }

  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName}, {postfix} </h3>
      <h4>{title}</h4>
      <button onClick={togglePets}>{showPets ? 'Hide Pets' : 'Show Pets'}</button> 
      {showPets && <PetList pets={pets} />}
    </article>
  );
};

export default Employee;
