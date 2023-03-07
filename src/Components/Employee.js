import PetList from "./PetList";
import "./Employee.css";

import { useState, useEffect} from "react";



export const Employee = ({firstName, lastName, prefix, postfix, title, id}) => {
  const [showPets, setShowPets]= useState(false);
 

  return (
    <article className="employee">
      {/* <h3>formatEmployee</h3> */}
      <h3>{prefix ? prefix: null} {firstName} {lastName}, {postfix ? postfix: null}</h3>
      <br></br>
      <h4>{title}</h4>
      <button onClick={() => {setShowPets(!showPets)}}>
        {showPets ? "Hide pets": "Show Pets"}
        </button>
     {showPets && <PetList id={id}/>} 
    </article>
  );
};

export default Employee;
