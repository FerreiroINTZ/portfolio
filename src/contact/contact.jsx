import './contact.css'
import {useRef} from 'react'
import gitHub from "../imgs/contatos/github.png"
import gMail from "../imgs/contatos/gmail.png"
import link from "../imgs/contatos/link-quebrado.png"
import copy from "../imgs/contatos/copia-de.png"
import sound from '../sounds/hover.wav'

function contact() {
  const audio = useRef()

  function play_audio(){
    audio.current.currentTime = "0"
    audio.current.volume = '.3'
    audio.current.play()
  }

  return (
    <section id="contact">
      <audio src={sound} ref={audio}></audio>
        <h2>Contatos</h2>
        <div 
            onMouseEnter={() => play_audio()}
            className='gitHub' 
            onClick={() => window.open("https://github.com/FerreiroINTZ")}>
            <img src={gitHub} alt="gitHub" className='logos'/>
            <span>https://github.com/FerreiroINTZ</span>
            <img src={link} alt="link" className='actions' />
        </div>
        <div 
            onMouseEnter={() => play_audio()}
            className='e-mail'
            onClick={() => navigator.clipboard.write('gabrielferreiro963@gmail.com')}>
            <img src={gMail} alt="e-mail" className='logos' />
            <span>gabrielferreiro963@gmail.com</span>
            <img src={copy} alt="e-mail" className='actions' />
        </div>
    </section>
  )
}

export default contact