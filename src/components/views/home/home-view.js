import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Particles from 'react-particles-js';

import { AppContext } from 'components/context';
import GridContainer, {GridElement, template_gridshape } from 'components/shared/containers/grid/grid'
import ParallaxLogo from 'components/shared/parallax-element/parallax-logo';
import WarpGraphContainer from 'components/shared/vanity-lab/warp-graph/warp-graph';
import LargeButton from 'components/shared/buttons/large-button/LargeButton';
import ToastedLoader from 'components/shared/loaders/toasted-loader/toasted-loader-view';
import Icons from '../../icons';
import {
    ReactComponent as Logo
} from 'components/assets/Logo.svg';
//Container for the view matching the route:

/**
 * Responsible for fetching processing data and rendering home view
 * @augments {Component<Props, State>}
 */
class HomeContainer extends Component {
    static contextType = AppContext; 

    state = {
        isLoaded: false,
        hasError: false,
        loadingMessage: "Fetching Home Base",
        errorMessage: "Oops looks like home's somewhere else",
    }

    componentDidMount() {
        // Run Api Calls
        // Updated Certain properties base on context
        this.setState({
            isLoaded: true,
        })
    }
    render() {
        var {
            isLoaded,
            hasError,
        } = this.state;

        return (
            <Fragment>
                <Helmet>
                    <title>Toasted Marshmallow</title>
                    <meta name="description" content="We build software, our developers are full-stack proficient, we love using new technologies, and we specialize in digital experience." />
                </Helmet>  
                <HomeView isLoaded data_height={this.context.data_height} data_width={this.context.data_width} />
            </Fragment>
        );
    }
}

export default HomeContainer;

/**
 * Responsible for rendering Home Component interface
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
const HomeView = (props) => {
    var {
        isLoaded, hasError,
        errorMessage, loadingMessage,

        data_height,
        data_width,
        ...rest
    } = props;


    var display_template = {};
    var horizontal_display_factor = 1;

    if (data_width < 1400) {
        display_template = mobile_template;
        horizontal_display_factor = 1;
    } else {
        display_template = desktop_template;
        horizontal_display_factor = 0.5
    }

    if (!isLoaded) {
        return (<ToastedLoader data_width={data_width} data_height={data_height} />)
    }

    return (
        <Fragment>
            <GridContainer style={display_template.grid_template}>

                {/* <GridElement className="" style={display_template.template_parallax} >
                    <ParallaxLogo  data_height={data_height*horizontal_display_factor} data_width={data_width}/>
                </GridElement> */}
{/* 
                <GridElement style={display_template.template_warp_graph} >
                <WarpGraphContainer
                    data_height={0.99 * data_height}
                    data_width={data_width}
                    data_vertical_scale={1}

                    state_warp_graph_type={1}

                    data_number_of_bumps={10}
                    data_number_of_samples={200}
                    data_number_of_layers={4}
                    data_id={Math.floor(Math.random()*100)}
                />
            </GridElement>  */}

                <GridElement classname='tm-bg-inverse' stlye={template_gridshape(1,13,1,13)} />


                <GridElement className='tm-bg-inverse blur-5 tm-primary d-flex flex-column align-content-center opacity' style={display_template.template_content} >
                    <span className='flex-1'></span>
                    <span className='flex-1'>
                        <h1 className='spartan text-xl font-lighter p-top-10 m-v-0 m-h-20 text-left tm-primary'>Toasted</h1>
                        <h1 className='spartan text-xxl font-lighter m-v-0 m-h-20 text-left tm-red'>Marhsmallow</h1>

                        <p className='segoe b-left-5 text-xsm  tm-border-red p-h-20 flex-1 text-left font-lighter p-bottom-20 m-h-20' style={display_template.content_width}>
                            A technology start-up that specialise in modern web development, trendy website design, SEO strategies, industrial automation,
                            IoT solutions and general mobile or desktop app development.
                        </p>

                    </span>
                    <span className='flex-1'></span>
                </GridElement>
                
                <GridElement className='d-flex align-items-center justify-content-center' style={display_template.template_logo}>
                    <Logo />
                </GridElement>

                <GridElement className='box-shadow text-xxsm tm-light text-lighter text-center tm-bg-primary spartan align-self-center p-v-20 m-v-10' style={display_template.template_banner}>
                    <span>Thanks for checking in.<span className='tm-red text-light text-xsm'> This site is currently under development. </span> Feel free to get in touch on our socials. </span>
                </GridElement>


            </GridContainer>

        </Fragment>
    )
}

HomeView.propTypes = {
    isLoaded: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    data_height: PropTypes.number,
}

const desktop_template = {
    grid_template: {
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
        width: '100vw',
        height: '100vh',
    },
    template_logo: {
        gridColumnStart: "8",
        gridColumnEnd: "13",
        gridRowStart: "1",
        gridRowEnd: "13",
    },
    template_banner: {
        gridColumnStart: "1",
        gridColumnEnd: "13",
        gridRowStart: "1",
        gridRowEnd: "2",
    },
    template_content: {
        gridColumnStart: "1",
        gridColumnEnd: "8",
        gridRowStart: "1",
        gridRowEnd: "13",
    },
    content_width: {
        width: "50%",
    },
}

const mobile_template = {
    grid_template: {
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
        width: '100vw',
        height: '100vh',
    },
    template_logo: {
        gridColumnStart: "1",
        gridColumnEnd: "13",
        gridRowStart: "7",
        gridRowEnd: "13",
    },
    template_banner: {
        gridColumnStart: "1",
        gridColumnEnd: "13",
        gridRowStart: "7",
        gridRowEnd: "8",
    },
    template_content: {
        gridColumnStart: "1",
        gridColumnEnd: "13",
        gridRowStart: "1",
        gridRowEnd: "7",
    },
    content_width: {
        width: "75%",
    },
}


const particle_Parameters = {
    particles: {
        number: {
            value: '500'
        },
        line_linked: {
            enable: false
        },
        move: {
            speed: '0.2'
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
