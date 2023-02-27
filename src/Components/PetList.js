
export const PetList = ({ petArr}) => {

console.log(petArr)

  
  return (
    <aside className="pets-list">
      {petArr.length > 0 ?
      (petArr.map((pet) => <p key={pet.id}>{pet.name}</p>)) : 
      (<p>No pets listed for this employee.</p>
      )}
    </aside>
  )
    
}
export default PetList;
