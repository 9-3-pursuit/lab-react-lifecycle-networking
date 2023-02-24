export const PetList = ({ pets, employeeId }) => {

let filteredPets = pets.filter((pet) => pet.employeeId === employeeId).map((pet) => pet.name)
 
  return (
    <aside className="pets-list">
      {filteredPets.length === 0 ? (<p>No pets listed</p>) : filteredPets.join(", ")}
    </aside>
  )
};

export default PetList;
