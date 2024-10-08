import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditting] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)

    function handleEditClick(){
        setIsEditting(edditing => !edditing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? 
                    <input type="text" required value={playerName} onChange={handleChange}/> :
                    <span className="player-name">{playerName}</span>

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
        </li>
    )
}