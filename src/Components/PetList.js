import { useState, useEffect } from "react";

export const PetList = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets`)
      .then((res) => res.json())
      .then((data) =>{
        setPets(data);
      })
  }, [])
      
      return (
        <aside className="pet-list">{
          !pets.length ? <p>No pets listed for this employee.</p> : (pets.map((pet) => { return <p>{pets.name}</p>; }))}
        </aside>
      )};