import React, {useContext} from 'react';
import frenchFlag from '../../assets/france.svg';
import spanishFlag from '../../assets/spain.svg';
import englishFlag from '../../assets/united-kingdom.svg';
import { Context } from '../../context/langContext';
import './ToggleLangs.css'

export default function ToggleLangs() {

    const {toggleLang} = useContext(Context);

  return (
    <div className="container-langs">
        <img src={frenchFlag} onClick={()=>toggleLang("FR")}/>
        <img src={englishFlag} onClick={()=>toggleLang("EN")}/>
        <img src={spanishFlag} onClick={()=>toggleLang("ES")}/>
    </div>
  )
}
