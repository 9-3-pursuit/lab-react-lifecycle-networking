import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = (props) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {props.employees.map((employee) => {
          return (
            <Employee
              name={employee.fullId}
              title={employee.title}
              pets={employee.pets}
              id={employee.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
