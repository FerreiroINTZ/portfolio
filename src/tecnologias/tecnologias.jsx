import React, {useRef, useContext} from 'react'
import { Context } from '../contents'
import './tecnologias.css'

import Tec_card from "./tec-card"

import effect from "../sounds/hover.wav"
import effect2 from "../sounds/selected.wav"

function itecnologias() {

  const {tecs} = useContext(Context)

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
        {tecs.map(x =>
          <Tec_card 
            card={x}
            playAudio={playAudio}/>
        )}
      </ul>
    </section>
  )
}

export default itecnologias