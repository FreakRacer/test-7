import { useState } from "react";


function Heroes(){

    const [names, setNames] = useState(
        [
            "Шерлок Холмс", 
            "Доктор Ватсон", 
            "Профессор Мориарти",
            "Миссис Хадсон",
            "Ирен Адлер"
          ]
    )

    const deleted = (id) => {
        setNames(names.filter((item, index) =>{
            if(index === id){
                return false
            } return true
        }))

    }

    return (
        <ul>
            {
                names.map((item, id) =>{
                    return <li key={id} onClick={() => deleted(id)}>{item}</li>
                })
            }
        </ul>
    )
}
export default Heroes