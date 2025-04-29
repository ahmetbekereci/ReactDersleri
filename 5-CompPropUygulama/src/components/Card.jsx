import React from 'react'
import './Card.css'

const Card = (props) => {

  return (
    <div className='card'>
      <img className='card-img' src={props.resim} />
      <div className='card-content'>
        <p>{props.yazi}</p>
        <button>{props.buton}</button>
      </div>
    </div>
  )
}

export default Card

// props ları silip, {} arasında resim, yazi, buton yazabiliriz. ({resim, yazi, buton}) şeklinde.