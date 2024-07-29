import React, {useRef} from 'react'
import './tecnologias.css'
import html from '../imgs/tec/html-5.png'
import css from '../imgs/tec/css.png'
import js from '../imgs/tec/javaScript.png'
import react from '../imgs/tec/reactJs.png'
import figma from '../imgs/tec/figma-site.png'
import git from '../imgs/tec/git-colored.png'

import effect from "../sounds/hover.wav"
import effect2 from "../sounds/selected.wav"

function itecnologias() {

  const audio = useRef()
  const audio2 = useRef()

  function playAudio(opt){
    if(opt == 1){
      audio.current.volume = ".5"
      audio.current.play()
    }else{
      audio2.current.volume = ".5"
      audio2.current.currentTime = "0"
      audio2.current.play()
    }
  }

  return (
    <section id='tecnologias-section'>
      <audio src={effect} ref={audio}></audio>
      <audio src={effect2} ref={audio2}></audio>
      <h2>Tecnologias</h2>
      <ul>
          <li 
            onMouseEnter={() => playAudio(1)}
            onClick={() => playAudio(2)}>
              <img src={html} alt="html"/>
              <p><strong>HTML</strong></p>
          </li>
        <li onMouseEnter={() => playAudio(1)}
            onClick={() => playAudio(2)}>
          <img src={css} alt="css" />
          <p><strong>CSS</strong></p>
        </li>
        <li onMouseEnter={() => playAudio(1)}
            onClick={() => playAudio(2)}>
          <img src={js} alt="JavaScript"/>
          <p><strong>JavaScript</strong></p>
        </li>
        <li onMouseEnter={() => playAudio(1)}
            onClick={() => playAudio(2)}>
          <img src={react} alt="react"/>
          <p><strong>React</strong></p>
        </li>
        <li onMouseEnter={() => playAudio(1)}
            onClick={() => playAudio(2)}>
          <img src={figma} alt="figma"/>
          <p><strong>Figma</strong></p>
        </li>
        <li onMouseEnter={() => playAudio(1)}
            onClick={() => playAudio(2)}>
          <img src={git} alt="git"/>
          <p><strong>Git</strong></p>
        </li>
      </ul>
    </section>
  )
}

export default itecnologias