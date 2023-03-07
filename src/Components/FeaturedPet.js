import PetList from "./PetList";
import { useState, useEffect } from "react";

const API_BASE = "https://vet-app-0obi.onrender.com/api";
const futureFeaturedPets = {
  "02/24/23": "dGXf5O9",
  "02/25/23": "dwW-UfK",
  "02/26/23": "1p9oPcM",
};

export default function FeaturedPet({ day }) {
    const [petOfTheDay, setPetOfTheDay] = useState({name: "", kind: ""});


useEffect(()=> {
    function fetchPetOfTheDay() {
      //  https://vet-app-0obi.onrender.com/api/pets/s7xFnQQ
      const url = `${API_BASE}/pets/${futureFeaturedPets[day]}`;
     
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
              console.log("We got the data")
              setPetOfTheDay(data);
          });
        }
    fetchPetOfTheDay();
}, [day]);// passing an empty array is a shortcut to stop infinie loop  
    console.log("Rendering FeaturedPet");
    return <h3>Pet of the Day:  {petOfTheDay.name} the {petOfTheDay.kind}</h3>;
}