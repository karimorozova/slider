import Image from 'next/image'
import s from './Slide.module.css'

function Slide({slide, offset, dir}) {
    const active = offset === 0 ? true : null
    // console.log(dir, 'dir');
    // console.log(offset, 'offset');
    return (
        <div className={s.slide} data-active={active} style={{transform: `translateX( calc(100% * ${offset}) )`, backgroundImage: `url('${slide.source}')`}}>{slide.des} {offset}</div>
        
        // rotateY( calc(-25deg * ${dir}))
        // <Image className={s.slide} src={slide.source} alt={slide.des} width={236} height={512}/> 
    )
}

export default Slide