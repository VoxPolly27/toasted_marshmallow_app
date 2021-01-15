import React, { Component, Fragment } from 'react';
import './Error.css';
import { TMButton } from 'components/views/home/Home';
import { Link } from "react-router-dom";
import { hierarchy } from 'd3';
import anime from 'animejs/lib/anime.es.js'

export class Error extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="feature-section inverted-section" style={{ height: '100vh' }}>
                    <Blocksgrid width={this.props.width} height={this.props.height} />
                    <div className="flex-container p-absolute align-content-center" style={{zIndex: '10', display: 'grid'}}>
                        <div className='feature-hero-title'>
                            <p className="bolded tm-red tm-text-xlg text-center">420<span className='tm-text-lg tm-dark'> Error </span></p>
                            <p className="mont tm-text-md text-center">Enhance your calm</p>
                        </div>
                        <div className='feature-description'>
                            <p className="mont tm-text-xsm text-center">Our devs are working on this page.</p>
                            <p className="mont tm-text-xsm text-center">Come back in a little while.</p>
                            <Link to="/">
                                <div className="tm-outline-button text-text-md mont text-center">Go back</div>
                            </Link>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

class Blocksgrid extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        var height, width;
        width = this.props.width * 1;
        height = this.props.height * 1;

        let side = 100;
        let x = width / side;
        let y = height / side;

        return (
            <Fragment>
                <svg id="Blocks" fill="none" width={width} height={height} x='0' y='0'>
                    <Block x={x} y={y} side={side} n={x*y} />
                </svg>
            </Fragment>
        );
    }
}

class Block extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const duration = this.props.n * 50;
        anime({
            targets: '.block',
            keyframes: [
                {
                    stroke: '#FEF7FE',
                    strokeDasharray: 40

                },
                {
                    stroke: '#A02B5D',
                    strokeDasharray: 80


                },
                {
                    stroke: '#4A3457',
                    strokeDasharray: 160,
                },
                {
                    stroke: '#B92B68',
                    strokeDasharray: 180

                },
                {
                    stroke: '#E8CFDE',
                    strokeDasharray: 80

                },
                {
                    stroke: '#FEF7FE',
                    strokeDasharray: 40

                }
            ],
            easing: 'linear',
            duration: duration,
            loop: true,
            delay: anime.stagger(50)
        });
    }

    render() {
        let props = this.props;
        var elements = [];
        for (var i = 0; i < props.x; i++) {
            for (var j = 0; j < props.y; j++) {
                elements.push(<rect strokeDasharray="60" transform={SquareTranslation(i, j, props.side)} key={`X${i}Y${j}`} stroke="#FEF7FE" width={props.side} height={props.side}  strokeWidth="1" className='block' />)
            }
        }
        return shuffle(elements);

    }
}

function SquareTranslation(x, y, a) {
    let xTrans = x * a;
    let yTrans = y * a;
    let result = "translate(" + xTrans + "," + yTrans + ")";
    return result;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

