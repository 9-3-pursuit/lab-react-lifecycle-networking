import { useState, useEffect } from "react";

export const PetList = ({ employeeId }) => {

  const [pets, setPets] = useState([]);

  // using useEffect hook to perform a fetching side effect
  useEffect(() => {
    // fetching data from URL
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${employeeId}`)
      // converting response from server into parsed JSON data
      .then((res) => res.json())
      // updating component state to equal parsed JSON data
      .then((apiData) => {
        setPets(apiData)
      })
    // setting dependency to employeeId value 
  }, [employeeId]);

  return (
    <aside className="pets-list">
      {pets.length ? (pets.map((pet) => { return <p>{pet.name}</p>; })) : <p>No pets listed for this employee.</p>}

    </aside>
  );
};

export default PetList;
