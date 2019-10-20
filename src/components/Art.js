import React from 'react';
import style from './art.module.css'

const Art = ({title, image, date}) => {
    return (
        <div className={style.art}>
            
            <h2>{title}</h2>
            <p>{date}</p>
            <img className="art-image" src={image} alt=""></img>
        </div>
    )
}

export default Art