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
            <h1>DIGIMON LIST</h1>
            <div>
                {digimons.map( digi => (
                    <div key={digi.id} >

                        <h3>#{digi.id} {digi.name}</h3>
                        <img src={digi.image} alt={digi.name} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MercadoLibre