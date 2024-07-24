import React from 'react'
import logo from "./imgs/formato-html.png"
import brasil_logo from './imgs/bandeira-do-brasil.png'

function header() {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
            <ul>
                <nav>
                    <li>Habilidades</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </nav>
                <li>
                    <span>Linguagem:</span>
                    <div className="img"><img src={brasil_logo} alt="" /></div>
                </li>
            </ul>
    </header>
  )
}

export default header