import React from 'react'
import './Urunler.css'

const Urunler = ({ database: { name, color, price, discount, img } }) => {
    return (
        <div className='urunler'>
            <img src={`/img/${img}`} alt='' />
            <h3>{name}</h3>
            <div className='urunler1'>
                <p>{color}</p>
                <span className='span1'>{price} TL</span>
            </div>
            {discount && <span className='span2'>indirimde</span>}
        </div>
    )
}

export default Urunler