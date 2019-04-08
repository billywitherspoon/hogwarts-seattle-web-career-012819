import React from 'react';

const Hog = (props) => {
      console.log(`../hog-imgs/${props.hog.image}`)
      return (
         <div className='pigTile'>
            <img src={props.hog.image}/>
            <p className='hoggyText'>{props.hog.name}</p>
            <p className='normalText'>Specialty: {props.hog.specialty} </p>
         </div>
      )
}

export default Hog;
