import React from 'react';
import style from './Profile.module.css';
import images from '../images/images';
import Time from './Time';



function Profile(props) {
    
    const onPassingOftenData = (oftenData) => {
        props.onComingOftenData(oftenData)
    }
    
    return (
        <div className={style.card} >
            <div className={style.profile}>
                <img src={images.jeremy} alt='jeremy' className={style.img}/>
                <p className={style.p}> Report for </p>
                <h1> Jeremy Robson </h1>
            </div>
            <div className={style.time}>
                <Time onSelectedOften={onPassingOftenData}/>
                
            </div>
        </div>
    )
}

export default Profile;