import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import Layer_1 from 'components/assets/layer-1.svg'
import Layer_2 from 'components/assets/layer-2.svg';
import { param } from 'jquery';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 60}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

export default function ParallaxLogo(props) {
    var {data_height, data_width} = props;
    const [properties, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 250, tension: 1000, friction: 240 } }))


    const element1 = {
        backgroundImage: `url(${Layer_1})`,
        height: `${0.5*data_height}px`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        willChange: 'transform',
        transform: properties.xy.interpolate(trans1),
        minWidth: '250px',
        top: '25vh',
    }

    const element2 = {
        backgroundImage: `url(${Layer_2})`,
        height: `${0.5*data_height}px`,
        minWidth: '250px',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        willChange: 'transform',
        transform: properties.xy.interpolate(trans2),
        top: '27vh',

    }

    const containerStyle = {
        height: '100%',
    }

    return (
        <div className='d-flex align-items-center justify-content-center' style={containerStyle} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={element1} />
            <animated.div style={element2} />
        </div>
    )
}
