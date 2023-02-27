import { useState, useEffect } from "react";


export const PetList = ({id}) => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    
    const url = `https://vet-app-0obi.onrender.com/api/pets`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setPets(data);
        
      });
  }, [])
  const filteredList = pets.filter((pet)=> {
    if (pet.employeeId !== id) {
      return null
    }
      return pet.employeeId === id;
  })
  
  // const filteredList = employeesAssignedPets.find((pet) => (employeesAssignedPets ? pet.name : "No Pets listed for this employee"))
  // console.log(filteredList)
  //  const petNamesList = pets.pet.name.join(",")
//  console.log(petNamesList)
  // const filteredList = pets.filter((pet) => (pet.employeeId === id));
  // console.log(filteredList)
 
  
  return (
    <aside className="pets-list">
     
     {filteredList.map((pet) => (<p key={pet.id}>{pet.name},</p>))}
    
      
    </aside>
  )
}

export default PetList;
