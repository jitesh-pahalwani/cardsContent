import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
      <div className='buttonContainer' onClick={() => props.onButtonPress ? props.onButtonPress() : null}>
        {props.text}
      </div>
    );
}

export default Button;
