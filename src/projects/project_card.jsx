import React from 'react'

function project_card({project, play_audio}) {
  return (
    <li 
        onMouseEnter={() => play_audio()}>
        <div className="img"><img src={project.img} alt="" /></div>
        <button 
            onClick={() => project.link ? window.open(project.link) : ""}
            style={{background: project.able ? "#00AE11" : "#757575"}}>
                {project.able ? "Jogar" : "Desenvolvendo"}
        </button>
        <p>{project.info}</p>
    </li>
  )
}

export default project_card