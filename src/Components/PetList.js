import { useState, useEffect} from "react";
export const PetList = ({employeeId}) => {
  const [petData, setPetData] = useState([])
  useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${employeeId}`)
    .then((res) => res.json())
    .then((data) => setPetData(data))
  },[])
  if (petData.length===0) {
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
} else {
  return (
    <aside className="pets-list">
      {petData.map(pet => `${pet.name}, `)}
    </aside>
  )
}
}


export default PetList;
