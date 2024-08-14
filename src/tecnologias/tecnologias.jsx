import React, {useRef, useContext, useState, useEffect} from 'react'
import { Context } from '../contents'
import './tecnologias.css'

import Tec_card from "./tec-card"

import effect from "../sounds/hover.wav"
import effect2 from "../sounds/selected.wav"

function itecnologias() {
  //  elemento anterior
  const [elemento, SetElemento] = useState()

  const {tecs} = useContext(Context)

  
  function ass(element){
    
    console.log("value: ",element.target.value)
    if(elemento){ // verifica se o "elemento anterior" existe
      if(elemento.id != element.target.id) // verifica se o elemento atual nao é o anterior
        console.log(elemento)
        elemento.value = "on" // define isto pois antes tava dando problema de inputs de values iguais
      }

    if(element.target.value == "ativo"){
      element.target.checked = false
      element.target.value = "on"
    }else{
      element.target.value = "ativo"
    }
      SetElemento(element.target)
    }

    const audio = useRef()
    const audio2 = useRef()

  function playAudio(opt){
    if(opt){
      audio.current.currentTime ='0'
      audio.current.volume = ".5"
      audio.current.play()
    }else{
      audio2.current.currentTime ='0'
      audio2.current.volume = ".5"
      audio2.current.play()
    }
  }

  return (
    <section id='tecnologias-section'>
      <audio src={effect} ref={audio}></audio>
      <audio src={effect2} ref={audio2}></audio>
      <h2>Tecnologias</h2>
      <ul>
        {tecs.map((x, index) =>
          <Tec_card 
            key={index}
            ass={ass}
            card={x}
            playAudio={playAudio}/>
        )}
      </ul>
    </section>
  )
}

export default itecnologias