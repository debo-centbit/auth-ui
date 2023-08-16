import React, {useState} from 'react';
import { FaArrowRight } from 'react-icons/fa';

type ButtonsProps = {
  label: string;
  arrow?: boolean;
  width?: string;
  height?: string;
  color?: string;
  border?: any;
  cursor?: string;
  
};

const Buttons = (props: ButtonsProps) => {
  const [color, setColor] = useState('');

  const buttonStyle = {
    width: props.width || 'auto',
    height: props.height || 'auto',
    backgroundColor: props.color || color, 
    color: 'white',
    border: 'none',
    borderRadius: props.border || '4px', 
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  };
  const arrowStyle = {
    fontSize: '16px'
  };


  return (
    <button style={buttonStyle}>
    {props.label}
    {props.arrow && <FaArrowRight style={arrowStyle}/>}
    </button>
  );
};

export default Buttons;




