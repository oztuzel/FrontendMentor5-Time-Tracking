import React from 'react';
import style from './Time.module.css';

function Time(props) {
  

  const changeTimer = (event) => {
    
    // console.log(event.target.attributes.value);
    props.onSelectedOften(event.target.attributes.value)
  }
  

  return (
    <div className={style.time}>
      <p className={style.p} value='daily' onClick={changeTimer}> Daily </p>
      <p className={style.p} value='weekly' onClick={changeTimer}>Weekly </p>
      <p className={style.p} value='monthly' onClick={changeTimer}>Monthly</p>
    </div>
  )
}

export default Time