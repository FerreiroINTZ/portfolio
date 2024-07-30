import React, {useRef, useContext} from 'react'
import "./projects.css"
import {Context} from '../contents'
import Register_React from '../imgs/projects/sigles/register-react_img.png'
import sound from '../sounds/projects-hover.mp3'

import Project_card from './project_card'

function projects() {

  const {projects} = useContext(Context)

  const audio = useRef()
  
  function play_audio(){
    audio.current.currentTime = '0'
    audio.current.volume = '.3'
    audio.current.play()
  }

  return (
    <section id='projects-section'>
      <audio src={sound} ref={audio}></audio>
        <h2>Projetos</h2>
        <ul>
          {
            projects.map(x =>
              <Project_card 
              project={x}
              play_audio={play_audio}/>
            )
          }
          {/* <li onMouseEnter={() => play_audio()}>
            <div className="img"><img src={Register_React} alt="" /></div>
            <button onClick={() => window.open("https://ferreirointz.github.io/Register_React")}>Jogar</button>
            <p>Um projeto feito para demonstrar as habilidades de frmulario. Foi ultilisado a tecnologias React.</p>
          </li>
          <li  onMouseEnter={() => play_audio()} className='Desabilitado'>
            <div className="img"><img src="https://www.creativefabrica.com/wp-content/uploads/2019/10/01/Abstract-Technology-Gear-Background-by-ojosujono96.jpg" alt="" /></div>
            <button>Desenvolvendo</button>
            <p>...</p>
          </li> */}
        </ul>
    </section>
  )
}

export default projects