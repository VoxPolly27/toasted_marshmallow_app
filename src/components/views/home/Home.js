import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { ReactComponent as Logo } from 'components/assets/Logo.svg';
import { Link, Route } from 'react-router-dom';
import { Title } from 'components/shared/title/title';
import Particles from 'react-particles-js';
import { Helmet } from 'react-helmet';

export function TMButton(props) {
    let btnInnerStyle = {
        height: props.height,
        width: props.width,
        lineHeight:  props.height,
        background: props.fill,
        fontFamily: 'Santiago Sans St',
        borderRadius: "25px",
        padding: "2px",
        fontSize: "1.25em",
        color: props.color,
    };
    let btnOuterStyle = {
        padding: "2px",
        background: props.gradient,
        backgroundGradient: props.gradient,
        borderRadius: "25px",
        width: "max-content",
        display: "inline-block"
    }

    let mailRef = 'mailto: ' + props.email;
    return (<a href={mailRef} className="tm-button-outer" style={btnOuterStyle}><div className="tm-button-inner" style={btnInnerStyle}>{props.text}</div></a>)
}

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            width: window.outerWidth, // Change this to client width
            height: window.innerHeight, // Change this to client height
        }

    }

    handleWindowSizeChange = () => {
        if ((window.outerWidth - this.state.width >= 50) || (window.innerHeight - this.state.height >= 50)) {
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
        const { width, height } = this.state;
        const isMobile = width <= 760;

        if (isMobile) {
            return (
                <HomeMobile width={width} height={height}/>
            )
        } else {
            return (
                <HomeDeskTop width={width / 2} height={height}/>
            )
        }
    }
}




export class HomeDeskTop extends Component {
    static displayName = Home.name;

    render() {
        let a = "We build ";
        let b = <span className="tm-red">software.</span>;
        let c = <br />;
        let d = "Fancy.Special. ";
        let e = <span className="tm-red">Unique.</span>;
        let f = <p className="futura-maxi-cg tm-dark-up"> Maybe we can write and </p>;
        let g = <p className="futura-maxi-cg tm-dark-up"> develop some for you or your company. </p>;
        let h = <p className="futura-maxi-cg tm-dark-up"> What do you need done? </p>;


        let colStyle = { alignSelf: 'center', textAlign: 'center' };
        let params = {
            particles: {
                number: {
                    value: '1200'
                },
                line_linked:{
                    enable: false
                },
                move: {
                    speed: '0.2'
                },
                size: {
                    value: '3',
                    random: true,
                },
                color: {
                    value: ['#FF6969', '#4A3457', '#E8CFDE', '#A02B5D', '#F75965']
                },
            }
        }
        return (
            <Fragment>
                <Helmet>
                    <title>Toasted Marshmallow</title>
                    <meta name="description" content="We build software, our developers are full-stack proficient, we love using new technologies, and we specialize in digital experience." />
                </Helmet>  
                <div className='d-flex' style={{height: this.props.height}}>
                    <div className="tm-bg-dark d-flex flex-1" >
                        <div className='d-flex flex-1'>
                            <Particles className='p-absolute' height={this.props.height*0.99} width={this.props.width} params={params}/>
                            <Col xs="12" style={colStyle}><Logo/></Col>
                        </div>
                        <div className='tm-bg-light tm-dark d-flex flex-1'>
                            <Col xs="12" style={colStyle}>
                                <h3 className="futura-maxi-cg text-center">{a}{b}{c}{d}{e}</h3>
                                <br />
                                <br />
                                {f}{g}{h}
                                <br />
                                <br />
                                <Link to='/contact'><TMButton height="2.2em" width="8.5em" fill="#FEF7FE" gradient="linear-gradient(126deg, rgba(83,43,72,1) 0%, rgba(232,77,87,1) 100%)" text="Get in Touch" /></Link>
                            </Col>
                        </div>
                    </div>
                </div>
            </Fragment>

    );
  }
}

export class HomeMobile extends Component {
    static displayName = Home.name;



    render() {
        let a = "We build ";
        let b = <span className="tm-red">software.</span>;
        let c = <br />;
        let d = "Fancy.Special. ";
        let e = <span className="tm-red">Unique.</span>;
        let tmLogoSVG = {height: "35vh", marginTop: '20vh', zIndex: 1 }
        let title = "tm-light tm-text-sm";
        let params = {
            particles: {
                number: {
                    value: '1000'
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: '0.1'
                },
                size: {
                    value: '2',
                    random: true,
                },
                color: {
                    value: ['#FF6969', '#4A3457', '#E8CFDE', '#A02B5D', '#F75965']
                },
            }
        }
        return (
            <Fragment >
            <Particles className='p-absolute' width={this.props.width} height={this.props.height} params={params}/>
            <section className="feature-section">
                <div className="flex-container">
                    <div className='feature-animation d-flex'>
                        <Logo style={tmLogoSVG} />
                    </div>

                    <div className='feature-description d-flex'>
                        <div className='flex-1 text-center'>
                            <Title titleM='tm-text-lg text-center' title={title} />
                            <p style={{ letterSpacing: "2px", opacity: "0.77" }} className="futura tm-text-xsm text-center tm-light">{a}{b}{c}{d}{e}</p>
                        </div>
                    </div>
                </div>

            </section>
            </Fragment>
        );
    }
}




