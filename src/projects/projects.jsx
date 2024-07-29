import React from 'react'
import "./projects.css"
import eu from "../imgs/projects/gb7.jpg"

function projects() {
  return (
    <section id='projects-section'>
        <h2>Projetos</h2>
        <ul>
          <li>
            <div className="img"><img src="https://www.creativefabrica.com/wp-content/uploads/2019/10/01/Abstract-Technology-Gear-Background-by-ojosujono96.jpg" alt="" /></div>
            <button>Jogar</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem deserunt, ad autem dicta expedita deleniti. Consectetur sapiente esse tempora temporibus laudantium ut ex quasi cupiditate, dicta voluptatibus voluptatem quod?</p>
          </li>
          <li>
            <div className="img"><img src="https://www.creativefabrica.com/wp-content/uploads/2019/10/01/Abstract-Technology-Gear-Background-by-ojosujono96.jpg" alt="" /></div>
            <button>Jogar</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem deserunt, ad autem dicta expedita deleniti. Consectetur sapiente esse tempora temporibus laudantium ut ex quasi cupiditate, dicta voluptatibus voluptatem quod?</p>
          </li>
        </ul>
    </section>
  )
}

export default projects