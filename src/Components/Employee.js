import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

const API_BASE = "https://vet-app-0obi.onrender.com/api"

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState({ boolean: false });
  const [pets, setPets] = useState([])


  useEffect(() => {
    function fetchPets() {
      const url = `${API_BASE}/pets`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPets(data)
        })
    }
    fetchPets()
  }
    , [employee])


  function handleShowPets(id) {
    if (showPets.boolean === true) {
      setShowPets({
        boolean: false,
        [id]: false
      })
    } if (showPets.boolean === false) {
      setShowPets({
        boolean: true,
        [id]: true
      })
    }
  }

  return (
    <>
      <article className="employee">
        <h3>{employee.prefix} {employee.firstName} {employee.lastName}{employee.postfix.length > 0 ? "," : null} {employee.postfix} </h3>
        <h4>{employee.title}</h4>
        <button onClick={() => handleShowPets(employee.id)}>Show Pets</button>
        {showPets.boolean && showPets[employee.id] ? (<PetList pets={pets} employeeId={employee.id} />) : null}
      </article> 
    </>
  );
};

export default Employee;
