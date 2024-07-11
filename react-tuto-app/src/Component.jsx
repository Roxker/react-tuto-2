import React, {useState} from 'react'

export default function Component() {
    const [text, setText]=useState();
    const [updated, setUpdated]=useState();

    const textOnChange = (event) => setText(event.target.value)
    const buttonOnClick = () => setUpdated(text)
    return (
    
  

    <div>
        <p>Componente PAPU</p>
        <input type="text" value={text} onChange={textOnChange}/>
        <button onClick={buttonOnClick}>Update</button>
        <p>input: {text}</p>
        <p>texto actualizado {updated}</p>
    
    </div>
    
  )
}
