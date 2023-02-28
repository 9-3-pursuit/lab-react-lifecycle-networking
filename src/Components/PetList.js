import { useState , useEffect } from "react"


export const PetList = ({ API_BASE , showPets , employeeId }) => {
  const [petList, setPetList] = useState([])
  const petUrl = `${API_BASE}/pets?employeeId=${employeeId}`;
  
  useEffect(() => {
    fetch(petUrl)
    .then((res) => res.json())
    .then((petData) => {
    setPetList(petData.map(pet => pet.name))
    });
  }, [employeeId, petUrl]);

  
  

  return (
    <aside className="pets-list">
      <div>{ petList.length ? (petList.map((pet, i) => {
        if(i === petList.length - 1) {
          return`${pet}`
        } else {
          return `${pet}, `
        }
        })) : <p>No pets listed for this employee.</p>}
      </div>

    </aside>
  );
};

export default PetList;