import Pet from "./Pet";
import { useState } from "react";

export const PetList = ({ API_BASE, employee }) => {
  const [togglePets, setTogglePets] = useState({
    text: "Show",
    value: false
  })
  const [employeeId, setEmployeeId] = useState("");

  function handleClick(id) {
    setEmployeeId(id)
    if(togglePets.text === "Show") {
      setTogglePets({text: "Hide", value: true})
    } else {
      setTogglePets({text: "Show", value: false})
    }
  }

  return (
    <>
      <button onClick={() => handleClick(employee.id)}>{togglePets.text} Pets</button>
      <aside className="pets-list">
      {togglePets.value && <Pet API_BASE={API_BASE} employeeId={employeeId} />}
      </aside>
    </>
      
  );
};

export default PetList;
