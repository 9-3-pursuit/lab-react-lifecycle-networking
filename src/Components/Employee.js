import PetList from "./PetList";
import "./Employee.css";

import { useState, useEffect} from "react";



export const Employee = ({firstName, lastName, prefix, postfix, title, id}) => {
  const [showPets, setShowPets]= useState(false);
  // const [pets, setPets] = useState([]);
  // console.log(id)
  // useEffect(() => {
    
  //   const url = `https://vet-app-0obi.onrender.com/api/pets`;
  //   fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //           console.log(data)
  //           setPets(data);
  //       });
  // }, [])

  return (
    <article className="employee">
      {/* <h3>formatEmployee</h3> */}
      <h3>{prefix ? prefix: null} {firstName} {lastName} {postfix ? postfix: null}</h3>
      <h4>{title}</h4>
      <button onClick={() => {setShowPets(!showPets)}}>
        {showPets ? "Hide Pets": "Show Pets"}
        </button>
     {showPets && <PetList id={id}/>}
    </article>
  );
};

export default Employee;
