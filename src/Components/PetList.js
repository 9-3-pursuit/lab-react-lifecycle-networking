import { useState, useEffect } from "react";

export const PetList = () => {
  const [pets,setAllPets] = useState(false)
  useEffect(()=>{
    fetch("https://vet-app-0obi.onrender.com/api/pets").then((res)=> res.json()).then((apiData)=>{setAllPets(apiData);})
  }, [])
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;


// export const PetList = ({
//   id,
//   name, 
//   kind, 
//   breed, 
//   employeeId 
// }) => {
//   const [pets, setPets] = useState(false);

//   useEffect(() => {
//     fetch("https://vet-app-0obi.onrender.com/api/pets")
//     .then((res) => res.json())
//     .then((apiData) => {
//       setPets(apiData);})
//   }, [])


