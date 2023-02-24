export const formatAnimal =(id,name,kind,breed,employeeId) => {
    if(employeeId && id) {
      return `${name} ${kind} ${breed}, ${employeeId}`
    } else return "No pets listed for this employee"      
}