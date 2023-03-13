const API_BASE = "https://vet-app-0obi.onrender.com/api";
const futureFeaturedPets = {
  "02/24/23": "dGXf5O9",
  "02/25/23": "dwW-UfK",
  "02/26/23": "1p9oPcM",
};

export default function FeaturedPet({ day }) {
  function fetchPetOfTheDay() {
    //  https://vet-app-0obi.onrender.com/api/pets/s7xFnQQ
    const url = `${API_BASE}/pets/${futureFeaturedPets[day]}`;
    console.log(url);
  }
  console.log("Rendering FeaturedPet");
  return <h3>Pet of the Day: </h3>;
}