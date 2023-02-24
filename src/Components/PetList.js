export const PetList = ({ pets }) => {
  const getPetNames = () =>
    pets.length > 0
      ? pets.map((pet) => pet.name).join(", ")
      : "No pets listed for this employee";
  const petNames = getPetNames();

  return (
    <aside className="pets-list">
      <p>{petNames}</p>
    </aside>
  );
};

export default PetList;
