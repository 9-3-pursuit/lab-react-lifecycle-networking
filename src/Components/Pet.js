import { useState, useEffect } from "react"

export default function Pet({ API_BASE, employeeId }) {

    const [petList, setPetList] = useState([])
    const url = `${API_BASE}api/pets?employeeId=${employeeId}`

    useEffect(() => {
      function fetchPetList() {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setPetList(data.map(pet => pet.name))
          })
      }
      fetchPetList();   
    }, [employeeId, url])


    return(
        <div>
            { petList.length ? (petList.map((pet, i) => {
                if(i === petList.length - 1){
                    return `${pet}`
                } else {
                    return `${pet}, `
                }
            })) : <p>No pets listed for this employee</p>}
            
            
        </div>
    )
}