import React from 'react'
import logo from "../imgs/formato-html.png"
import brasil_logo from '../imgs/bandeira-do-brasil.png'
import './header.css'

function header() {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
            <ul>
                <nav>
                    <li><a href="#tecnologias-section">Tecnologias</a></li>
                    <li><a href="#projects-section">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </nav>
                <li>
                    <span>Linguagem:</span>
                    <img src={brasil_logo} alt="" />
                </li>
            </ul>
    </header>
  )
}

export default header