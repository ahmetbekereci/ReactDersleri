import React from 'react'
import './Course.css'


function Course({ course }) {
    const { id, title, description, price, link, img } = course;
    return (
        <div className='course' key={id}>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <h3>Price: {price} ₺ </h3>
            <a href={link} target="_blank">Learn More</a>
        </div>
    )
}

export default Course