import React, {useState} from 'react'
import './start.css'
import me from '../imgs/WhatsApp Image 2024-07-07 at 16.14.20.jpeg'
// import arow from "../imgs/"

function start() {
  const [hable, setHable] = useState(true)
  const texto = "Sou um jovem entusiasta da tecnologia e desenvolvedor indie Front-End. Meu sonho é ser o desenvolvedor full-stack de uma grande empresa, entretanto o Front-End anda sendo minha principal paixao, no momento."

  return (
    <div className='cover'>
        <div>
          <span className='light'></span>
          <div className="title">
              <p className='row1'>Ola, seja bem vindo!</p>
              <p className='row2'>Me chamo Gabriel</p>
              <p className='row3'>Dev Front-End</p>
          </div>
        </div>
        <div className='photo'>
          <img src={me} alt="" />
        </div>
        <div className='info' onClick={() => setHable(!hable)}>
          <p>Seja bem vindo ao meu portifolio pessoal. Aqui voçê vera informações sobre mim.</p>
          <p>{hable ? texto : ""}</p>
          <span 
            class="material-symbols-outlined arrow">
            arrow_right
          </span>
        </div>
    </div>
  )
}

export default start