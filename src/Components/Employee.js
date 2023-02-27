import PetList from "./PetList";
import "./Employee.css";
import { useState} from"react";

const URL = `https://vet-app-0obi.onrender.com/api/pets`
export const Employee = ({employee}) => {
  const[clicked, setClicked] = useState(false);
  const [petArr, setPetArr] = useState([]);

  function handleClick(){
    setClicked(!clicked);
    getPets();

  }

  function getPets(){
    fetch(`${URL}?employeeId=${employee.id}`)
    .then((response) => response.json())
    .then((pets) => {
      setPetArr([...pets]);
    })
  }
  

  
  

  
  return (
    <article className="employee">
      <h3>{`${employee.prefix} ${employee.firsName} ${employee.lastName} ${employee.postfix ? ", " + employee.postfix : ""}`}</h3>
      <h4>{employee.title}</h4>
      <button onClick = {handleClick}>Show Pets</button>

      {clicked?
      <PetList petArr={petArr}/> : null }
    </article>
  );
};

export default Employee;
