import React from 'react';
import './HeroStyle.css';



function Hero(props){
    return(
 <div id={props.idName}>
    <img alt='image' src={props.heroImg}/>
    <div className={props.cName}>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    </div>
 </div>


  )
}


export default Hero 