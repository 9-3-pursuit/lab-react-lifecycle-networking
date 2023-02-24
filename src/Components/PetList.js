export const PetList = ({pets, employeeId}) => {

 
    const petNames = pets.filter((pet) => pet.employeeId === employeeId)
    .map((pet) => pet.name);

  return (
    <aside className="pets-list">
      {petNames.length > 0 ? <p>{petNames.join(", ")}</p> : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
