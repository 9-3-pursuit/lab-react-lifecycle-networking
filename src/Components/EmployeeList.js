import React, { useState, useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const API_BASE =  ""
export const EmployeeList = () => {

  const [employee, setEmployee] = useState([])

  useEffect(() => {
    function getEmployeeInfo(){
      const url = `${API_BASE}`
    }
  })

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee />
      </section>
    </main>
  );
};

export default EmployeeList;
