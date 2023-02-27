import { useState, useEffect } from "react";

export const PetList = () => {

  const [pets, setPets] = useState([]);


    useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets`)
    .then((res)=> res.json())
      .then((petData)=>{

        setPets(petData);
        
    })
  }, [])


  return (
    <aside className="pets-list">
       {
       !pets.length ? <p>No pets listed for this employee.</p> : (pets.map((pet) => { return <p>{pet.name}</p>; }))
      }
    </aside>
  );
};

export default PetList;
