import PetList from "./PetList";
import { useState, useEffect } from "react";
import "./Employee.css";

export const Employee = ({employee}) => {
  const [petList, setPetList] = useState({boolean:false})
  const [pets, setPets] = useState({ name: "", kind: "" })

  function getPetsData () {
    const pets = "https://vet-app-0obi.onrender.com/api/pets"
    fetch(pets)
    .then((results) => results.json())
    .then((petsData) => {
      setPets(petsData);
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPetsData();
  }, [])

  function togglePetList () {
    setPetList(!petList)
  }

  function renderPetList (employeeId) {
    return (
      <PetList pets={pets} employeeId={employeeId} />
    )
  }

  return (
    <article className="employee">
      <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName}${employee.postfix ? `, ${employee.postfix}` : ""}`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => togglePetList()}>Show Pets</button>
      {!petList ? renderPetList(employee.id) : null}
    </article>
  );
};

export default Employee;
