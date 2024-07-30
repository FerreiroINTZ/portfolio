import React from 'react'

function tec_card({card, playAudio}) {
    console.log(card.html)
  return (
    <li 
        onMouseEnter={() => playAudio(true)}
        onClick={() => playAudio(false)}>
            <img src={card.img} alt={card.name}/>
            <p><strong>{card.name}</strong></p>
        </li>
  )
}

export default tec_card