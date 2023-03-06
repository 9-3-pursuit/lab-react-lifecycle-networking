// importing React from "react" to gain access to features of React library
import React from "react";
// importing Employee component from ./Employee to use in this component
import Employee from "./Employee";
// importing and applying CSS fom ./EmployeeList.css
import "./EmployeeList.css";

// creating functional component called EmployeeList
// using object destructuring to pass useState and useEffect as arguments for function 
export const EmployeeList = ({ useState, useEffect }) => {
  // initializing a state variable named "employees" and setting value to an empty array
  const [employees, setEmployees] = useState([]);

  // using useEffect hook to perform a fetching side effect
  useEffect(() => {
    // fetching data from URL
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      // converting response from server into parsed JSON 
      .then((res) => res.json())
      // updating component state to equal parsed JSON data
      .then((apiData) => {
        setEmployees(apiData)
      })
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee, i) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
