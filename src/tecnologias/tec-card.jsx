import React from 'react'

function tec_card({card, playAudio, ass}) {
    console.log(card)
  return (
    <>
    <input type="radio" name="radio" onClick={x => ass(x)} id={card.name}/>
    <li 
      onMouseEnter={() => playAudio(true)}
      onClick={x => playAudio(false)}>
          <label htmlFor={card.name}>
            <div className='tec-logo'>
              <img src={card.img} alt={card.name}/>
              <p><strong>{card.name}</strong></p>
            </div>
            <div className='tec-info'>
              {card.info}
            </div>
          </label>
    </li>
        </>
  )
}

export default tec_card