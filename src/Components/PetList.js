import { useState, useEffect } from 'react';

export const PetList = ({ id }) => {
  const [pets, setAllPets] = useState([]);
  console.log(setAllPets);
  useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${id}`)
      .then((res) => res.json())
      .then((apiData) => {
        setAllPets(apiData);
      });
  }, [id]);


  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
      {pets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        <ul>
          {' '}
          {pets.map((p, i) => (
            <li key={i}> {p.name}</li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default PetList;
