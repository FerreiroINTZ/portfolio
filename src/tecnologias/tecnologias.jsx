import React from 'react'
import './tecnologias.css'
import html from '../imgs/tec/html.png'
import css from '../imgs/tec/css-3.png'
import js from '../imgs/tec/js.png'
import react from '../imgs/tec/react.png'
import figma from '../imgs/tec/figma.png'
import git from '../imgs/tec/git.png'

function itecnologias() {
  return (
    <section className='tecnologias-section'>
      <h2>Tecnologias</h2>
      <ul>
          <li>
              <img src={html} alt="html" />
              <p><strong>HTML</strong></p>
          </li>
        <li>
          <img src={css} alt="css" />
          <p><strong>CSS</strong></p>
        </li>
        <li>
          <img src={js} alt="JavaScript"/>
          <p><strong>JavaScript</strong></p>
        </li>
        <li>
          <img src={react} alt="react"/>
          <p><strong>eact</strong></p>
        </li>
        <li>
          <img src={figma} alt="figma"/>
          <p><strong>Figma</strong></p>
        </li>
        <li>
          <img src={git} alt="git"/>
          <p><strong>Git</strong></p>
        </li>
      </ul>
    </section>
  )
}

export default itecnologias