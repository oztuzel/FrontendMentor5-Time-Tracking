import React from 'react';
import style from './Card.module.css';
import images from '../images/images';



function Card({title, img, time, often}) {

  // let textOffen = often;
  const {current , previous} = time
  
  return (
    <div className={style.card}>
      <div className={`${style.imageDiv} ${style[title]}`}>
        <img src={img} alt={title} className={style.img} />
      </div>
      <div  className={style.down}>
        <p className={style.title}> {title} <img src={images.ellipsis} alt={title} className={style.ellipsis}/> </p>
        <h1 className={style.h1}> {current}hrs  </h1> 
        <p className={style.p}> Last {often}-{previous} hrs </p>
      </div>
    </div>
  )
}

export default Card