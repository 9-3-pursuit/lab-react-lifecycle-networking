import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import FeaturedPet from "./Components/FeaturedPet";
const API_BASE = "https://vet-app-0obi.onrender.com/api";

function App() {
  const [day, setDay] = useState("02/24/23");
  const [count, setCount] = useState(0);
  const [allStaff, setAllStaff] = useState([]);


  useEffect(() => {
    function fetchEmployees() {
      const url = `${API_BASE}/employees`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAllStaff(data);
        })
    }
    fetchEmployees()
  }, []) // empty arrays makes function to run just once 

  return (
    <>
      <NavBar />
      <FeaturedPet day={day} />
      <EmployeeList allStaff={allStaff} />
      <button
        onClick={() => setDay(day === "02/24/23" ? "02/25/23" : "02/24/23")}
      >
        Change Day
      </button>
      <button onClick={() => setCount(count + 1)}>
        Force App to re-render
      </button>
    </>
  );
}

export default App;