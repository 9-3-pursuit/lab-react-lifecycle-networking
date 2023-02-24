import React, { useState, useEffect } from "react";

export const PetList = ({
  name,
  kind,
  breed,
  employeeId}) => {
  const [pets, setPets] = useState(false)
  useEffect(()=>{
    fetch("https://vet-app-0obi.onrender.com/api/pets")
    .then((response)=>response.json())
    .then((apiData)=>
    {setPets(apiData)})
  }, [])
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;
