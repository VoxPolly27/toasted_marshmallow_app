import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Title } from "components/shared/title/title";
import Stick from 'components/assets/marshStickLong.png';
import { ReactComponent as Logo } from 'components/assets/Logo.svg';
import { Link } from 'react-router-dom';


function HiddenHeroText(props) {
    return (<div className="bauhaus text-left tm-footer-hero" >Get in touch</div>)
}

export class Footer extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 1000;

        if (isMobile) {
            return (
                <FooterMobile />
            );
        } else {
            return (
                <FooterDesktop />
            );
        }
    }
}

class FooterDesktop extends Component {

    render() {
        let footerBanner = {
            flex: '1',
            display: 'content',
            padding: '5px',
        };

        return (
            
            <Container fluid={true} className="tm-footer">
                <div style={footerBanner} className="tm-bg-red text-center">
                    <p className="bolded tm-light m-0"> Congratulations on finding the software company you've been looking for!</p>
                </div>
                <div class='tm-footer-img-wrapper'>
                    <img src={Stick} className='tm-footer-img' alt="Marshy on a stick" />
                </div>
                <div className='tm-footer-company'>
                    <Title title='tm-light heading-sub'/>
                </div>
                <div className='tm-footer-hero-wrapper'>
                    <HiddenHeroText />
                </div>
                <div className='tm-footer-links-wrapper'>
                    <div className='tm-footer-links'>
                        <div className='tm-footer-links-section'>
                            <ul className='tm-footer-links-list'>
                                <li className='tm-footer-links-heading'>Home</li>
                                <li className='tm-footer-links-sub'>Get in touch</li>
                            </ul>
                        </div>
                        <div className='tm-footer-links-section'>
                            <ul className='tm-footer-links-list'>
                                <li className='tm-footer-links-heading'>Solutions</li>
                                <li className='tm-footer-links-sub'>Web Solutions</li>
                                <li className='tm-footer-links-sub'>Front-End Effects</li>
                                <li className='tm-footer-links-sub'>Internet of Things</li>
                                <li className='tm-footer-links-sub'>Data and Cloud</li>

                            </ul>
                        </div>
                        <div className='tm-footer-links-section'>
                            <ul className='tm-footer-links-list'>
                                <li className='tm-footer-links-heading'>Company</li>
                                <li className='tm-footer-links-sub'>About us</li>
                                <li className='tm-footer-links-sub'>Expertise</li>
                                <li className='tm-footer-links-sub'>Our story</li>
                                <li className='tm-footer-links-sub'>Legal</li>

                            </ul>
                        </div>
                        <div className='tm-footer-links-section'>
                            <ul className='tm-footer-links-list'>
                                <li className='tm-footer-links-heading'>Social</li>
                                <li className='tm-footer-links-sub'></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='tm-footer-toe-wrapper'>
                    <p className='tm-footer-toe tm-red bolded'>Toasted Marshmallow (Pty) Ltd 2020</p>
                </div>

            </Container>
        );
    }
}


class FooterMobile extends Component {
    state = {}
    render() {
        let footerBanner = {
            flex: '1',
            display: 'content',
            padding: '5px',
        };

        return (
            <section className="feature-section">
                <div className="flex-container">
                    <div style={footerBanner} className="tm-bg-red text-center">
                        <p className="bolded tm-light m-0"> Congratulations on finding the software company you've been looking for!</p>
                    </div>
                    <div className='feature-hero-logo-mobile'>
                        <Logo/>
                    </div>
                    <div className='feature-hero-title'>
                        <Link to='/contact'><p className="santiago tm-light-down tm-text-md text-center"><div className='tm-btn-contact'>Get in touch.</div></p></Link>
                    </div>
                </div>
            </section>
        );
    }
}

