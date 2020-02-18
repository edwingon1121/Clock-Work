import React,{useState} from 'react';
import AnalogClock from '../Clock/AnalogClock';
import Clock from '../Clock/Clock';
import './clockslide.css';

const ClockSlide = () => {
  const clocks = [<AnalogClock/>,<Clock className='digital-clock'/>, <Clock className='digital-square'/>,<Clock className='digital-round'/>];
  const [index, setIndex] = useState(0);
  const SIZE = clocks.length;

  const onForwardClick = () => {
    if (index < SIZE-1)setIndex(index+1);
    else setIndex(0);
  }
  const onBackClick = () => {
    if (index > 0) setIndex(index-1);
    else setIndex(SIZE - 1);
  }
  //onClick toggle between clocks provided
  
  return(
    <div className='slideshow-clock'>
      <div className='arrow' onClick={onBackClick}>{"<"}</div>
        <div className='clock-contain'>
          {clocks[index]}
        </div>
      <div className='arrow' onClick={onForwardClick}>{">"}</div>


    </div>
  )

} 
export default ClockSlide;