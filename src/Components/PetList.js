import { useState, useEffect } from "react";


const BASE_URL = `https://vet-app-0obi.onrender.com/api/pets?employeeId=`
const PetList = ({ id }) => { 

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        console.log(data)

      });
  }, [id]);


  return (
    <aside className="pets-list">
      { (pets.length >0 ? 
        <p>{pets.map(pet => pet.name).join(', ')}</p>
        : <p>No pets listed for this employee</p>
      )}
    </aside>
  );
};

export default PetList;

