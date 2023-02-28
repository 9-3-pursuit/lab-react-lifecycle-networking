import PetList from "./PetList";
import { useState } from "react";
import "./Employee.css";

export const Employee = ({employeeData, employee}) => {
  const [show, setShow] = useState(false)
  console.log(employee)
  console.log(show)
  // useEffect(() => {
  //   fetch("https://vet-app-0obi.onrender.com/api/employees")
  //   .then((res) => res.json())
  //   .then((data) => setEmployeeData(data))
  // },[])
  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName}, {employee.postfix}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setShow(!show)}>Show Pets</button>
      {show && <PetList employeeId={employee.id}/>}
    </article>
  );
};

export default Employee;
