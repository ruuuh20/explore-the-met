import React, { useState } from 'react';
import style from './art.module.css'

const Art = ({ title, image, date, country, department, artistName, artistRole, medium, dimensions, objectURL }) => {
    
    const [show, setShow] = useState(false)
    const getMore = () => {
        setShow(true)
    }
    return (
        <div className={style.art}>
            <img className="art-image" src={image} alt=""></img><br></br>
            <h3>{title}</h3>
            <div className={style.info}>
                <h4>{artistName.length ? artistName : "Unknown" }, {date}</h4><br></br><br></br>
                {country !== "" ? <span>Country: {country}</span> : <span>Country: not listed</span>}<br></br>
                <span>Dept: {department}</span><br/>
                {show === false ? <button className={style.moreButton} onClick={getMore}>More...</button> : '' }
                
                {show === true ? <div>
                    <span>{medium}</span><br/>
                    <span>{dimensions}</span><br/>
                    <span><a href={objectURL}>Website</a></span><br/>

                                </div> : <div></div>}

            </div>
        
        </div>
    )
}

export default Art