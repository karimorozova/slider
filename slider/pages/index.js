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


// function useTilt(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined };


//     let el = ref.current;

//     const handleMouseMove = e => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0 };


// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % slides.length };

//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//       state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1 };

//   }
// };

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return /*#__PURE__*/(
//     React.createElement("div", {
//       ref: ref,
//       className: "slide",
//       "data-active": active,
//       style: {
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1 } }, /*#__PURE__*/


//     React.createElement("div", {
//       className: "slideBackground",
//       style: {
//         backgroundImage: `url('${slide.image}')` } }), /*#__PURE__*/


//     React.createElement("div", {
//       className: "slideContent",
//       style: {
//         backgroundImage: `url('${slide.image}')` } }, /*#__PURE__*/


//     React.createElement("div", { className: "slideContentInner" }, /*#__PURE__*/
//     React.createElement("h2", { className: "slideTitle" }, slide.title), /*#__PURE__*/
//     React.createElement("h3", { className: "slideSubtitle" }, slide.subtitle), /*#__PURE__*/
//     React.createElement("p", { className: "slideDescription" }, slide.description)))));




// }

// function App() {
//   const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//   return /*#__PURE__*/(
//     React.createElement("div", { className: "slides" }, /*#__PURE__*/
//     React.createElement("button", { onClick: () => dispatch({ type: "PREV" }) }, "\u2039"),

//     [...slides, ...slides, ...slides].map((slide, i) => {
//       let offset = slides.length + (state.slideIndex - i);
//       return /*#__PURE__*/React.createElement(Slide, { slide: slide, offset: offset, key: i });
//     }), /*#__PURE__*/
//     React.createElement("button", { onClick: () => dispatch({ type: "NEXT" }) }, "\u203A")));


// }