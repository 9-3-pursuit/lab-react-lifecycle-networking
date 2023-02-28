
import PetList from "./PetList";
import { useState, useEffect } from "react";
import "./Employee.css";

const Employee = ({ employee }) => {
  const [petList, setPetList] = useState({ boolean: false });
  const [pets, setPets] = useState({ name: "", kind: "" });

  useEffect(() => {
    function getPetsInfo() {
      const url = "https://vet-app-0obi.onrender.com/api/pets"
      fetch(url)
        .then((results) => results.json())
        .then((data) => {
          setPets(data);
        })
        .catch((error) => console.log(error));
    }
    getPetsInfo();
  }, []);

  function togglePet() {
    setPetList(!petList);
  }

  function displayPet(employeeId) {
    return (<PetList pets={pets} employeeId={employeeId} />);
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {employee.postfix && `, ${employee.postfix}`}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={() => togglePet()}>{petList ? 'Show Pets' : 'Hide Pets'}</button>
      {!petList ? displayPet(employee.id) : null}
    </article>
  );
};
export default Employee;
