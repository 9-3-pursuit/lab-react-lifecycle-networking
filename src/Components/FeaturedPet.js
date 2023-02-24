import { useState, useEffect } from "react";

const API_BASE = "https://vet-app-0obi.onrender.com/api";
const futureFeaturedPets = {
  "02/24/23": "dGXf5O9",
  "02/25/23": "dwW-UfK",
  "02/26/23": "1p9oPcM",
};

export default function FeaturedPet({ day }) {
  const [petOfTheDay, setPetOfTheDay] = useState({ name: "", kind: "" });

  function fetchPetOfTheDay() {
    const url = `${API_BASE}/pets/${futureFeaturedPets[day]}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPetOfTheDay(data);
      })
  }

  useEffect(() => {
    fetchPetOfTheDay()
  }, [day]) 

  return <h3>Pet of the Day: {petOfTheDay.name} the {petOfTheDay.breed}</h3>;
}

