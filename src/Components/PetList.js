import React from "react";

export const PetList = ({ petNames }) => {
  return (
    <aside className="pets-list">
      <p>{petNames}</p>
    </aside>
  );
};

export default PetList;
