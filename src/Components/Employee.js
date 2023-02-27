import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

const Employee = ({employee}) => {



const [showPets, setShowPets] = useState(false)


  return (
    <article className="employee">
      <h3>{ `${employee.prefix} ${employee.firstName} ${employee.lastName}, ${employee.postfix} ` }</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>{showPets ? 'Show Less' : 'Show Pets'}</button>
      {showPets && <PetList id={employee.id}/>}
    </article>
  );
};

export default Employee;
