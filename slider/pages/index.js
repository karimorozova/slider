import { data } from '../config/sliderData'
import Slide from '../components/Slide';
import styled from 'styled-components';
import Image from 'next/image'
import { useState } from 'react'


const Slides = styled.div`
  display: grid;
`
const Title = styled.div`
  color: red;
`
// const Slide = styled.div`
// grid-area: 1 / -1;

// transform: translateX( calc(100% * var(--offset)) )
// `

export default function Home() {
  const [currentIdx, setCurrentIdx] = useState(3)

  const incrementIdx = () => {
    console.log(currentIdx);
    setCurrentIdx((currentIdx + 1) % data.length) 
  }
  const decrementIdx = () => {
    currentIdx === 0 ?
    setCurrentIdx(data.length - 1) :
    setCurrentIdx(currentIdx - 1)
  }
  return (
    <div style={{'width': '1200px', 'padding': '0 15px', 'margin': '0 auto', 'overflow': 'hidden' }} >

      <Title>Hi There</Title>
      <Slides style={{'display': 'grid'}}>
        {[...data, ...data, ...data].map((slide, index) => {
          let offset = data.length + (currentIdx - index)
          console.log(offset);
          let dir = offset === 0 ? 0 : offset > 0 ? 1 : - 1
          return (<Slide key={index} slide={slide} offset={offset} dir={dir}/>)
        })}
      </Slides>
      <button onClick={decrementIdx}>Prev</button>
      <button onClick={incrementIdx}>Next</button>
    </div>
  )
}
