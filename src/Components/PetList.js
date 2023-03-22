import { useState,useEffect } from "react";
import { formatAnimal } from "./utils/Animal";


export const PetList = ({id, name, kind, breed, employeeId}) => {
  const [pets, setAllPets] = useState([]);
  console.log(setAllPets);

  useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${id}`)
    .then((res) => res.json())
    .then((apiData) => {setAllPets(apiData);
    })
  }, [id])

  return (
    <aside className="pets-list">
      {pets.map((pet) => (
      <PetList key={pet.id} pet={pet} {...pet}/>
    ))}
      <p>{formatAnimal(id,name,kind,breed,employeeId)}</p>
    </aside>
  );
};
export default PetList;