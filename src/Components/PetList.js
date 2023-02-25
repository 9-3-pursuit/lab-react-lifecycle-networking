import { useState, useEffect } from "react";

export const PetList = ({ employeeID }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${employeeID}`);
      const data = await response.json();
      console.log(data);
      setPets(data);
    };
    fetchPets();
  }, [employeeID]);
  return (
    <aside className="pets-list">
      {pets.length ? (
        pets.map((pet) => {
          return <p key={pet.id}>{pet.name}</p>;
        })
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
