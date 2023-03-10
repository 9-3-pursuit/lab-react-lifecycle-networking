export const formatAnimal = (id, name, kind, breed, employeeID) => {
  if (employeeID && id) {
    return `${name} ${kind} ${breed} ${employeeID}`;
  } else return " No pets listed for this employee";
};
