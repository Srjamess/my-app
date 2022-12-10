import React from 'react';

function Img(props){
    return(
      <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`/public/IMG/${props.imagen}`)} />
    </div>
    );
}

export default Img;