import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";



export const Employee = ({employee}) => {
  const [petList, setPetList] = useState({boolean:false})
  const [pets, setPets] = useState({ name: "", kind: "" })
  useEffect(() => {
  function getPetsData () {
    const pets = "https://vet-app-0obi.onrender.com/api/pets"
    fetch(pets)
    .then((results) => results.json())
    .then((petsData) => {
      setPets(petsData);
    })
    .catch((error) => console.log(error))
  }
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