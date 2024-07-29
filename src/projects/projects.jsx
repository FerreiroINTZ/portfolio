import React, {useRef} from 'react'
import "./projects.css"
import sound from '../sounds/projects-hover.mp3'

function projects() {
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
          <li onMouseEnter={() => play_audio()}>
            <div className="img"><img src="https://www.creativefabrica.com/wp-content/uploads/2019/10/01/Abstract-Technology-Gear-Background-by-ojosujono96.jpg" alt="" /></div>
            <button>Jogar</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem deserunt, ad autem dicta expedita deleniti. Consectetur sapiente esse tempora temporibus laudantium ut ex quasi cupiditate, dicta voluptatibus voluptatem quod?</p>
          </li>
          <li  onMouseEnter={() => play_audio()}>
            <div className="img"><img src="https://www.creativefabrica.com/wp-content/uploads/2019/10/01/Abstract-Technology-Gear-Background-by-ojosujono96.jpg" alt="" /></div>
            <button>Jogar</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem deserunt, ad autem dicta expedita deleniti. Consectetur sapiente esse tempora temporibus laudantium ut ex quasi cupiditate, dicta voluptatibus voluptatem quod?</p>
          </li>
        </ul>
    </section>
  )
}

export default projects