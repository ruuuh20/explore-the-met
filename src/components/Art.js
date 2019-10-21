import React from 'react';
import style from './art.module.css'

const Art = ({ title, image, date, country, department, artistName, artistRole }) => {
    return (
        <div className={style.art}>
            <h3>{title}</h3>
            <h4>{artistName}</h4>
            <h4>{date}</h4><br></br><br></br>
            <img className="art-image" src={image} alt=""></img><br></br>
            {country != "" ? <span>Country: {country}</span> : 'Country: not listed'}
            <span>Dept: {department}</span>
        </div>
    )
}

export default Art