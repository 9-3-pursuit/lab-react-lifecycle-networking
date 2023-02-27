import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetch("some data").then((res) => res.json()
  .then(apiAData) => {
    setEmployees(apiData);
  });
}, []);
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee, i) => {
          <Employee key={employee.id} employee={employee} {...employee}/>
        ))}
   
      </section>
    </main>
  );
};

export default EmployeeList;
