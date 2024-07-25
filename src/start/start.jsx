import React, {useState} from 'react'
import './start.css'
import me from '../imgs/WhatsApp Image 2024-07-07 at 16.14.20.jpeg'
// import arow from "../imgs/"

function start() {
  console.log(window)

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
        <input type="checkbox" id="show-details"/>
        <label htmlFor="show-details" className='info' >
            <div>
              <p>Seja bem vindo ao meu portifolio pessoal. Aqui voçê vera informações sobre mim.</p>
              <p>Sou um desenvolvedor Front-End indie. Atualmente atuo como Freelancer, mas almejo um posto da minha area em uma emoresa.</p>
            </div>
            <span
              className="material-symbols-outlined arrow">
              arrow_right
            </span>
        </label>
        
    </div>
  )
}

export default start