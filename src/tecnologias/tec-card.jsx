import React from 'react'

function tec_card({card, playAudio, ass}) {
  return (
    <>
    <input type="radio" name="radio" id={card.name} onClick={x => ass(x)} id={card.name}/>
    <li 
      onMouseEnter={() => playAudio(true)}
      onClick={x => playAudio(false)}>
          <label htmlFor={card.name}>
            <div className='tec-logo'>
              <img src={card.img} alt={card.name}/>
              <p className='tec-name'><strong>{card.name}</strong></p>
            </div>
            <div className='tec-info'>
              <p>{card.info}</p>
            </div>
          </label>
    </li>
        </>
  )
}

export default tec_card