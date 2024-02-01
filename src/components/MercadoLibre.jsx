import { useState } from "react"

function MercadoLibre() {

    const [digimons, setDigimons] = useState([])

    fetch('https://digi-api.com/api/v1/digimon')
        .then(response => {
            return response.json()
        })
        .then(json => {
            setDigimons(json.content)
        })
    

    return (
        <>
            <div>
            {digimons.map( digi => (
                <h3>{digi.name}</h3> 
            ))}
            </div>
        </>
    )
}

export default MercadoLibre