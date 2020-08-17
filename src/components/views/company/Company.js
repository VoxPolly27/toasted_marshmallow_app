import React, { Component, Fragment } from 'react';
import anime from 'animejs/lib/anime.es.js'
import * as d3 from "d3";
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';
import { ReactComponent as Be } from 'components/assets/Icon-behance.svg';
import { ReactComponent as Git } from 'components/assets/Icon-github.svg';
import { ReactComponent as LinkedIn } from 'components/assets/icon-linkedin.svg';
import { Footer } from 'components/layout-elements/footer/footer.js';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect/dist/core';

export class Company extends Component {
    static displayName = Company.name;
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            width: window.outerWidth, // Change this to client width
            height: window.innerHeight, // Change this to client height
        }

        this.setIsLoaded = this.setIsLoaded.bind(this);
    }

    setIsLoaded = () => {
        this.setState({
            isLoaded : true,
        })
    }

    handleWindowSizeChange = () => {
        if ((window.outerWidth - this.state.width >= 50) || (window.innerHeight - this.state.height >= 200)) {
            this.setState({
                width: window.outerWidth,
                height: window.innerHeight,
            });
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnnount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    render() {
        return (
            <Fragment>
                    <Helmet>
                        <title>Toasted Marshmallow Software Company</title>
                        <meta name="description" content="We're a relatively new software company based in South Africa. Our team of developers enjoy nothing more than creating world class mobile-friendly apps, websites, web-apps, and specialized software solutions." />
                    </Helmet>  
                    <FeatureFirst width={this.state.width} height={this.state.height} />
                    <FeatureSecond width={this.state.width} height={this.state.height}/>
                    <FeatureThird width={this.state.width} height={this.state.height}/>
                    <FeatureFourth width={this.state.width} height={this.state.height} />
                    <FeatureFifth width={this.state.width} height={this.state.height} />
                    <Footer/>
            </Fragment>
        );
    }
}

class FeatureFirst extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="feature-section"> 
                <div className="flex-container">
                    <div className='feature-hero-title'>
                        <p className="bolded tm-red tm-text-lg text-left">Who are we <span className='tm-light'>?</span></p>
                        <p className="bolded tm-text-md text-left">Hmm yes, thank you. A fine question.</p>
                    </div>
                    <div className='feature-description'>
                        <p className="mont tm-light tm-text-xsm color-shift">Toasted Marshmallow is an odd name for a tech start-up. <span className='tm-red'>That we know.</span></p>
                        <p className="mont tm-light tm-text-xsm color-shift">So where do we draw inspiration? Well, have you ever experienced a flame-grilled marshmallow? It's quite the sensation. The charred sugar tingles your taste buds whilst the soft sponginess of the marshmallow fills your mouth.You always find yourself wanting more.       So we drew from that experience.We built our company with aspirations to deliver a similar mouth - watering experience through software.</p>
                    </div>
                    <div className='feature-hero-logo'>
                        <MarshMallow id="Hero-Mallow" />
                    </div>
                </div>
            </section>
            )
    }


}

class FeatureSecond extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="feature-section inverted-section" id="TimeLineSection">
                <div className="flex-container">
                    <div className='feature-hero-title text-left'>
                        <p className="bolded tm-red tm-text-lg ">Yes, we are <span className='tm-dark'>new</span></p>
                        <p className="bolded tm-dark tm-text-md">But only for a little while.</p>
                    </div>

                    <div className='feature-animation' style={{ marginTop: '60px' }}>
                        <TimeLine width={this.props.width} height={this.props.height} style={{ padding: '40px', width: '65vw'}}/>
                    </div>

                    <div className='feature-hero-title'>
                        <p className="bolded tm-red tm-text-sm text-center">[<span className='tm-dark' id='timeLineText'>{timeLineTextArr[0]}</span>]</p>
                    </div>


                    <div className='feature-description d-flex flex-column mont tm-text-xsm text-left'>
                        <p>We have got nothing to hide regarding the creation of our trendy company. </p>
                        <p>But if you must know, it was late into 2019 and our founders had been playing with the idea of creating a space where we could bring our talents and expertise to the market. So we drew up a business plan, put together some saucy ideas, got our first major client and founded Toasted Marshmallow(Pty) Ltd.</p>
                    </div>
                </div>

            </section>
        )
    }
}

class FeatureThird extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="feature-section">
            <div className="flex-container">

                <div className='feature-hero-title' style={{paddingBottom : '20px'}}>
                    <p className="bolded tm-light tm-text-lg text-left">Where to <span className='tm-red'>find</span> us</p>
                    <p className="bolded tm-grey tm-text-md text-left">Which we strongly encourage</p>
                </div>

                <div className='feature-description d-flex'>
                    <div className='flex-1'>
                            <p className="mont tm-text-xsm text-left">Our team is based in Pretoria within the Republic of  <span className='tm-red'> South Africa.</span></p>
                            <p className="mont tm-text-xsm text-left">We aspire to bring the energy and enthusiasm of the tech industry to our home, South Africa.
                            Being a small start - up, we don't have big glass offices (yet). So if you want to contact us, use our Contact Us form. We'll be sure to call you back. </p>
                    </div>
                </div>

                <div className='feature-animation d-flex'>
                        <Portal width={this.props.width} height={this.props.height} style={{ padding: '40px', width: '50vw', marginTop: '50px', flex: '1' }} />
                </div>

            </div>

        </section>
        )
    }
}

class FeatureFourth extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className="feature-section inverted-section">
                <div className="flex-container">

                    <div className='feature-hero-title text-left' style={{ paddingBottom: '20px' }}>
                        <p className="bolded tm-red tm-text-lg">What's <span className='tm-dark'>imperative </span> to us</p>
                        <p className="bolded tm-grey tm-text-md">Yes, imperative indeed.</p>
                    </div>
                    <div className='feature-description'>
                            <p className="mont tm-text-xsm text-left hex-text">Build software applications that we are proud of and would be happy to make use.</p>
                            <p className="mont tm-text-xsm text-left hex-text">Deliver superb user experiences that assist our clients in improving their businesses.</p>
                            <p className="mont tm-text-xsm text-left hex-text">Build long-lasting relationships with our clients and fully understand their company requirements. .</p>
                            <p className="mont tm-text-xsm text-left hex-text">Maintain ethical standards and perform all facets of work with the highest levels of integrity. </p>
                            <p className="mont tm-text-xsm text-left hex-text">Continue to be trendy and implement modern principles, tools and architectures in our work.</p>
                    </div>
                    <div className='feature-animation d-flex'>
                        <HexGrid width={this.props.width} height={this.props.height} />
                    </div>
                </div>
            </section>
        )
    }
}

class FeatureFifth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="feature-section">
                <div className="flex-container">

                    <div className='feature-hero-title' style={{ paddingBottom: '20px' }}>
                        <p className="bolded tm-text-lg tm-red text-left">Follow <span className='tm-light'>our story.</span></p>
                        <p className="bolded tm-grey tm-text-md text-left">Or don't. I mean it's up to you.</p>
                    </div>

                    <div className='feature-description d-flex'>
                        <div className='flex-1'>
                            <p className="mont tm-text-xsm text-left">If seeing websites like this one excites you, and you follow tech trends, then be sure to check out our social accounts. You'll be exposed to projects we're working on, problems we've overcome and you'll see us grow our company from an idea into something a lot bigger than that.</p>
                        </div>
                    </div>

                    <div className='feature-icons d-flex'>
                        <Be />
                        <Git />
                        <LinkedIn />
                    </div>

                    <div className='feature-animation d-flex'>
                        <Graph width={this.props.width} height={this.props.height}/>
                    </div>




                </div>

            </section>
        )
    }
}

class Portal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        anime({
            targets: ['.r-5','.r-2','.r-3'],
            keyframes: [
                {
                    stroke: '#FEF7FE',
                },
                {
                    stroke: '#EF2268',
                },
                {
                    stroke: '#B92B68',
                },
                {
                    stroke: '#532B48',
                },
                {
                    stroke: '#842E5D',
                },

            ],
            loop: true,
            easing: 'linear',
            rotate: '+=900deg',
            duration: 6000,
        })
        anime({
            targets: ['.r-4', '.r-6', '.r-1'],
            keyframes: [
                {
                    stroke: '#F0DAF0',
                },
                {
                    stroke: '#F75965',
                },
                {
                    stroke: '#EF2268',
                },
                {
                    stroke: '#FEF7FE',
                },
                {
                    stroke: '#532B48',
                },

            ],
            rotate: '-=720deg',
            loop: true,
            easing: 'linear',
            duration: 6000,
        })
        anime({
            targets: ['.r-7'],
            keyframes: [
                { fillOpacity: 1 },
                { fillOpacity: 0 },
            ],
            loop: true,
            direction: 'alternate',
            easing: 'linear',
            duration: 12000,
        })
        anime({
            targets: ['.r-1', '.r-2', '.r-3', '.r-4', '.r-5', '.r-6'],
            keyframes: [
                { strokeDasharray: 500 },
            ],
            loop: true,
            direction: 'alternate',
            easing: 'linear',
            duration: 6000,
            delay: anime.stagger(150),
        })


    }

    render() {
        var r, CW, CH, sda,sdo;


        if (this.props.width > 768) {
            CW = this.props.width * 0.5;
            CH = this.props.height;
            r = CW * 0.45;
            sda = 250;
            sdo = 60;
        } else {
            CW = this.props.width*0.9;
            CH = this.props.height * 0.5;
            r = 0.5 * CH;
            sda = 100;
            sdo = 10;
        }

        
        return (
            <svg id="Portal" fill="none" width={CW} height={CH}>
                <circle className='r-7' cx={CW / 2} cy={CH / 2} fill='white' fillOpacity='0' stroke="#FEF7FE" strokeWidth="3" r={0.1 * r}></circle>
                <circle className='r-6' cx={CW / 2} cy={CH / 2} stroke="#EF2268" strokeWidth="3" strokeDashoffset="1" strokeDasharray="25" r={0.2*r}></circle>
                <circle className='r-3' cx={CW / 2} cy={CH / 2} stroke="#FEF7FE" strokeWidth="3" strokeDashoffset="1" strokeDasharray="25" r={0.25*r}></circle>
                <circle className='r-2' cx={CW / 2} cy={CH / 2} stroke="#B92B68" strokeWidth="3" strokeDasharray="25" r={0.3*r} strokeDashoffset="405"></circle>
                <circle className='r-1' cx={CW / 2} cy={CH / 2} stroke="#532B48" strokeWidth="3" strokeDashoffset="1" r={0.4 * r} strokeDasharray="25"></circle>
                <circle className='r-4' cx={CW/2} cy={CH/2}  stroke="#F0DAF0" strokeWidth="3" strokeDashoffset="1" r={0.45*r} strokeDasharray="25"></circle>
                <circle className='r-2' cx={CW / 2} cy={CH / 2} stroke="#842E5D" strokeWidth="3" strokeDashoffset="1" strokeDasharray="25" r={0.5*r}></circle>
                <circle className='r-1' cx={CW / 2} cy={CH / 2} r={0.55 * r} stroke="#F75965" strokeWidth="3" strokeDashoffset="1" strokeDasharray="25"></circle>
                <circle className='r-5' cx={CW / 2} cy={CH / 2} stroke="#532B48" strokeWidth="3" strokeDashoffset="1" strokeDasharray="25" r={0.75 * r}></circle>
                <circle className='r-6' cx={CW / 2} cy={CH / 2} stroke="#B92B68" strokeWidth="3" strokeDashoffset="1" strokeDasharray="25" r={0.8 * r}></circle>
                <circle cx={CW / 2} cy={CH / 2} stroke="#FEF7FE" strokeWidth="3" strokeDashoffset={sdo} strokeDasharray={sda} r={0.9 * r}></circle>

            </svg>
        )
    }

}

class TimeLine extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var moveDistance;
        if (this.props.width > 768) {
            moveDistance = ((this.props.width) * 0.6 * 0.2);
        } else {
            moveDistance = (this.props.width) * 1.0 * 0.2;
        }   

        function animateTimeLineIntervalDot(target) {
            anime({
                targets: target,
                easing: 'easeOutQuint',
                fill: '#FF6969',
            });
        }

        function moveTimeLineIndicator() {
            anime({
                easing: 'easeOutQuint',
                targets: '.timeLineIndicator',
                duration: 2000,
                keyframes: [
                    { translateX: `+=${moveDistance}` },
                ],
            });
        }

        function resetTimeLineIndicator() {
            anime({
                easing: 'easeOutQuint',
                targets: '.timeLineIndicator',
                duration: 2000,
                keyframes: [
                    { translateX: `-=${5*moveDistance}` },
                ],
            });
            anime({
                targets: '.timeLineInterval',
                easing: 'easeOutQuint',
                fill: '#FEF7FE',
            });
        }



        var timeLineTextEl = document.getElementById('timeLineText')
        var typewriter = new Typewriter(timeLineTextEl, {
            loop: true
        });


        typewriter.typeString(timeLineTextArr[0])
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => {
                moveTimeLineIndicator();
                animateTimeLineIntervalDot(document.getElementsByClassName('el0'));
            })
            .typeString(timeLineTextArr[1])
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => {
                moveTimeLineIndicator();
                animateTimeLineIntervalDot(document.getElementsByClassName('el1'));

            })
            .typeString(timeLineTextArr[2])
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => {
                moveTimeLineIndicator();
                animateTimeLineIntervalDot(document.getElementsByClassName('el2'));

            })
            .typeString(timeLineTextArr[3])
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => {
                moveTimeLineIndicator();
                animateTimeLineIntervalDot(document.getElementsByClassName('el3'));

            })
            .typeString(timeLineTextArr[4])
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => {
                moveTimeLineIndicator();
                animateTimeLineIntervalDot(document.getElementsByClassName('el4'));
            })
            .typeString(timeLineTextArr[5])
            .pauseFor(2000)
            .deleteAll()
            .callFunction(() => {
                animateTimeLineIntervalDot(document.getElementsByClassName('el5'));
                resetTimeLineIndicator();
            })
            .start();
    }

    render() {
        var r, CH, CW;


        if (this.props.width > 768) {
            CW = (this.props.width) * 0.6;
            CH = this.props.height*0.15;
            r = 0.01 * CW;
        } else {
            CW = (this.props.width) * 1.0;
            CH = this.props.height * 0.15;
            r = 0.05 * CH;
        }


        return (
            <Fragment>
                <svg id="TimeLine" fill="none" width={CW} height={CH}>
                   
                    <line id="History" x1="0" y1={CH / 2} x2={CW} y2={CH / 2} stroke="#201E20" strokeWidth="2" />

                    <circle className='timeLineIndicator' cx={0} cy={CH / 2} fill="#FF6969" stroke="" strokeWidth="3" r={r*1.5}></circle>

                    <circle className='timeLineInterval el0' cx={0} cy={CH / 2} fill="#FEF7FE" stroke="#FF6969" strokeWidth="3" r={r}></circle>
                    <circle className='timeLineInterval el1' cx={1 * (CW / 5)} cy={CH / 2} fill="#FEF7FE" stroke="#FF6969" strokeWidth="3" r={r}></circle>
                    <circle className='timeLineInterval el2' cx={2 * (CW / 5)} cy={CH / 2} fill="#FEF7FE" stroke="#FF6969" strokeWidth="3" r={r}></circle>
                    <circle className='timeLineInterval el3' cx={3 * (CW / 5)} cy={CH / 2} fill="#FEF7FE" stroke="#FF6969" strokeWidth="3" r={r}></circle>
                    <circle className='timeLineInterval el4' cx={4 * (CW / 5)} cy={CH / 2} fill="#FEF7FE" stroke="#FF6969" strokeWidth="3" r={r}></circle>
                    <circle className='timeLineInterval el5' cx={5 * (CW / 5)} cy={CH / 2} fill="#FEF7FE" stroke="#FF6969" strokeWidth="3" r={r}></circle>

                    <text x="10" y={CH / 5} fill="#FF6969" className='tm-text-lg tm-red'>2019</text>
                    <text x={4 * (CW / 5)} y={CH / 5} fill="#FF6969" className='tm-text-lg'>2020</text>
                </svg>
            </Fragment>
        )
    }
}
var timeLineTextArr = ['Brainstormed catchy names', 'Registered catchy name (Pty Ltd)', 'Started a super secret project', 'Registered not so secret domain', 'Plopped this website on aforementioned domain', 'Made your app?'];

class HexGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            a: null,
            isLoaded: false,
        }
    }

    componentDidMount() {
        var a;
        let CW = this.props.width;
        let CH = this.props.height * 0.45;

        if (this.props.width > 768) {
            a = 0.03 * CH;
        } else {
            a = 0.015 * CW;
        }

        let x = Math.round(CW / (2* a * Math.sqrt(3)));
        let y = Math.round(CH / (2 * a * Math.sqrt(3)));

        this.setState({
            x: x,
            y: y,
            a: a,
            isLoaded: true,
        })
    }

    render() {
        let CH = this.props.height * 0.45;
        let CW = this.props.width;
        let viewbox = `0 0 ${CW} ${CH}`;
        let { x, y, a, isLoaded } = this.state;

        let renderHexes = () => {
            if (isLoaded) {
                return (<Hexes x={x} y={y} a={a} n={x * y} />)
            }
        }

        return (
            <svg id="HexGrid" fill="none" width={CW} height={CH} viewBox={viewbox}> 
                {renderHexes()}               
            </svg>
        )
    }
}
class Hexes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const duration = this.props.n * 15;
        anime({
            targets: '.hex',
            keyframes: [
                { fill: '#F75965' },
                { fill: '#A02B5D' },
                {
                    fill: '#4A3457',
                    stroke: "#FEF7FE",

                },
                { fill: '#E8CFDE' },
                {
                    fill: '#FEF7FE',
                    stroke: "#FF6969",
                }
            ],
            easing: 'easeInOutExpo',
            duration: duration,
            endDelay: 2000,
            loop: true,
            delay: anime.stagger(30)
        });
    }

    render() {
        let props = this.props;
        var elements = [];
        for (var i = 0; i < props.x; i++) {
            for (var j = 1; j < props.y; j++) {
                if (Math.round(Math.random()) == 1) {
                    if (isEven(j)) {
                        elements.push(<polyline transform={HexTranslation(i, j, props.a, 1)} key={`X${i}Y${j}`} stroke="#FF6969" strokeWidth="0.5px" className='hex' points={HexCoordinateGenerator(props.a)} />)
                    } else {
                        elements.push(<polyline transform={HexTranslation(i, j, props.a, 0)} key={`X${i}Y${j}`} stroke="#FF6969" strokeWidth="0.5px" className='hex' points={HexCoordinateGenerator(props.a)} />)
                    }
                }
            }
        }

        return elements;

    }
}
function isEven(n) {
    return n % 2 == 0;
}
function HexCoordinateGenerator(a) {
    let v1 = [Math.sqrt(3)*a, 0];
    let v2 = [2 * Math.sqrt(3)*a,a];
    let v3 = [2 * Math.sqrt(3)*a, 3*a];
    let v4 = [Math.sqrt(3)*a, 4*a];
    let v5 = [0, 3*a];
    let v6 = [0, a];
    let result = +v1[0] + "," + v1[1] + " " + v2[0] + "," + v2[1] + " " + v3[0] + "," + v3[1] + " " + v4[0] + "," + v4[1] + " " + v5[0] + "," + v5[1] + " " + v6[0] + "," + v6[1] + " "+v1[0]+ "," + v1[1];

    return result
}
function HexTranslation(x, y, a, shift) {
    let xTrans = a * x * Math.sqrt(3) * 2 + (shift * a * Math.sqrt(3));
    let yTrans = y * 3 * a;
    let result = "translate(" + xTrans + "," + yTrans + ")";

    return result;
}

class Graph extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var height;
        var width;
        width = this.props.width;
        if (this.props.width > 768) {
            height = this.props.height * 0.65;
        } else {
            height = this.props.height * 0.5;
        }

        const svg = d3.select("#ToastedGraph");
        let n = 8 // number of layers 
        let m = 200 // number of samples per layer
        let k = 8 // number of bumps per layer
        let x = d3.scaleLinear([0, m - 1], [0, width]);
        let y = d3.scaleLinear([0, 1], [height, 0]);
        let z = d3.scaleOrdinal(['#FF6969', '#4A3457', '#E8CFDE', '#A02B5D', '#F75965']);
        let offset = d3.stackOffsetWiggle;


        let area = d3.area()
            .x((d, i) => x(i))
            .y0(d => y(d[0]))
            .y1(d => y(d[1]))

        let stack = d3.stack()
            .offset(offset)
            .keys(d3.range(n))
            .order(d3.stackOrderNone)

        function randomize() {
            const layers = stack(d3.transpose(Array.from({ length: n }, () => bumps(m, k))));
            y.domain([
                d3.min(layers, l => d3.min(l, d => d[0])),
                d3.max(layers, l => d3.max(l, d => d[1]))
            ]);
            return layers;
        }

        function bump(a, n) {
            const x = 1 / (0.1 + Math.random());
            const y = 2 * Math.random() - 0.5;
            const z = 10 / (0.1 + Math.random());
            for (let i = 0; i < n; ++i) {
                const w = (i / n - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        function bumps(n, m) {
            const a = [];
            for (let i = 0; i < n; ++i) a[i] = 0;
            for (let i = 0; i < m; ++i) bump(a, n);
            return a;
        }
        const path = svg.selectAll("path")
            .data(randomize)
            .join("path")
            .attr("d", area)
            .attr("fill", () => z(Math.random()));

        async function generate() {
            await svg.node();

            path
                .data(randomize)
                .transition()
                .duration(1500)
                .attr("d", area)
                .end()
            
        }

        setInterval(function () { generate() }, 10000);

    }

    render() {

        var CH, CW;
        CW = this.props.width;
        if (this.props.width > 768) {
            CH = this.props.height * 0.65;
        } else {
            CH = this.props.height * 0.5;
        }

        let viewbox = `0 0 ${CW} ${CH}`;



        return (
            <Fragment>
                <svg id="ToastedGraph" fill="none" width={CW} height={CH} viewBox={viewbox}>
                </svg>
            </Fragment>
        );
    }
}

//class PieRenderer extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            data: [2, 4, 6, 8, 10],
//        };
//    }

//    componentDidMount() {
//        var p,i;
//        setInterval(() => {
//            p = [];
//            for (i = 0; i < 5; i++) {
//                p.push(Math.random()*20)
//            }
//            this.setState({
//                data : p,
//            })
//        }, 2500);

//    }


//    render() {
//        var C;
//        if (this.props.width > 768) {
//            C = (this.props.width) * 0.15;
//        } else {
//            C = (this.props.height) * 0.1;
//        }

//        let x = C / 2;
//        let y = C / 2;

//        return (
//            <svg id="PieChart" fill="none" width={C} height={C}>
//                <g transform={`translate(${x}, ${y}) rotate(0)`}> 
//                    <g className="pieGroup" style={{ opacity: 1 }} transform="rotate(0) scale(1)"> 
//                        <Pie data={this.state.data} x={x} y={y} radius={C / 2} />
//                    </g>
//                </g>
//            </svg>
//        )


//    }
//}
//class Pie extends Component {
//    constructor(props) {
//        super(props);
//        this.colorScale = d3.scaleOrdinal(['#FF6969', '#4A3457', '#E8CFDE', '#A02B5D', '#F75965']);
//    }

//    componentWillReceiveProps() {
//        let pie = d3.pie();
//        let arc = d3.arc()
//            .innerRadius(this.props.radius / 2)
//            .outerRadius(this.props.radius);
//        let pieData = pie(this.props.data);

//        anime({
//            targets: '.pieGroup',
//            rotate: '+=360deg',
//            easing: 'easeInOutExpo',
//            duration: 1250,
//        });

//        anime({
//            targets: '.seg1',
//            d: arc(pieData[0]),
//            easing: 'easeInOutExpo'
//        });
//        anime({
//            targets: '.seg2',
//            d: arc(pieData[1]),
//            easing: 'easeInOutExpo'
//        });
//        anime({
//            targets: '.seg3',
//            d: arc(pieData[2]),
//            easing: 'easeInOutExpo'
//        });
//        anime({
//            targets: '.seg4',
//            d: arc(pieData[3]),
//            easing: 'easeInOutExpo'
//        });
//        anime({
//            targets: '.seg5',
//            d: arc(pieData[4]),
//            easing: 'easeInOutExpo'
//        });

//    }

//    render() {

//        return (
//            <Fragment>
//                <path className="seg1" d="M0" fill={this.colorScale(0)} />
//                <path className="seg2" d="M0" fill={this.colorScale(1)} />
//                <path className="seg3" d="M0" fill={this.colorScale(2)} />
//                <path className="seg4" d="M0" fill={this.colorScale(3)} />
//                <path className="seg5" d="M0" fill={this.colorScale(4)} />
//            </Fragment>
//        );
//    }
//}




//if (this.state.isLoaded) {
//    const TimeLineSection = document.getElementById("TimeLineSection");
//    //console.log("Offset");
//    //console.log(TimeLineSection.offsetTop);

//    var path = document.querySelector('#star-path');

//    // Get length of path... ~577px in this demo


//}

//handleScroll = e => {
//    let x = document.getElementsByClassName("page");
//    let y = document.getElementsByClassName("color-shift");

//    let i;
//    let j;

//    let sT = e.target.scrollingElement.scrollTop;
//    let cH = e.target.scrollingElement.clientHeight;
//    //console.log("Scroll Top: " + sT);
//    //console.log("Client Height: " + cH);

//    if (sT >= 2 * (cH)) {
//        for (i = 0; i < x.length; i++) {
//            x[i].classList.remove("tm-bg-dark");
//            x[i].classList.add("tm-bg-light");
//        }
//        for (j = 0; j < y.length; j++) {
//            y[j].classList.remove("tm-light");
//            y[j].classList.add("tm-dark");
//        }
//    }
//    if ((sT < 2 * (cH)) || (sT > 3.4 * (cH))) {
//        for (i = 0; i < x.length; i++) {
//            x[i].classList.add("tm-bg-dark");
//            x[i].classList.remove("tm-bg-light");
//        }
//        for (j = 0; j < y.length; j++) {
//            y[j].classList.add("tm-light");
//            y[j].classList.remove("tm-dark");
//        }
//    }
//}




//function generate() {
//    //console.log('function fired update');
//    fetch(svg.node()).then(() => {
//        path
//            .data(randomize)
//            .transition()
//            .duration(1000)
//            .attr("d", area)
//            .end();
//    })

//}

//setInterval(function () { generate() }, 8000);