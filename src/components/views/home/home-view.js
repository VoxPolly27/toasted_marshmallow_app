import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Particles from 'react-particles-js';

import { AppContext } from 'components/context';
import GridContainer, {GridElement, template_gridShape } from 'components/shared/containers/grid/grid'
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

    if (data_width < 768) {
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
                <GridElement className="" style={display_template.template_parallax} >
                    <Particles params={particle_Parameters} height={data_height*0.99}/>
                </GridElement>


                <GridElement style={display_template.template_warp_graph} >
                    <WarpGraphContainer
                        data_height={0.99 * data_height}
                        data_width={data_width*horizontal_display_factor}
                        data_vertical_scale={0.6}

                        state_warp_graph_type={1}

                        data_number_of_bumps={5}
                        data_number_of_samples={150}
                        data_number_of_layers={7}
                        data_id={Math.floor(Math.random()*100)}
                    />
                </GridElement>

                {/* <GridElement className="" style={display_template.template_parallax} >
                    <ParallaxLogo  data_height={data_height*horizontal_display_factor} data_width={data_width}/>
                </GridElement> */}



                <GridElement className='tm-bg-inverse tm-primary d-grid align-content-center' style={display_template.template_content} >
                    <Logo className='justify-self-center m-top-10' height={data_height*0.2}/>
                    <h2 className='futura p-top-10 m-v-0 text-center tm-primary'>software engineering solutions</h2>
                    <p className='segoe text-center justify-self-center font-lighter p-bottom-20' style={display_template.content_width}>
                        We are a technology start-up that specialise in modern web development, trendy website design, SEO strategies, industrial automation, IoT solutions and general mobile or desktop app development.
                    </p>
                </GridElement>

            </GridContainer>

            <GridContainer >
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
    template_parallax: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
        gridRowStart: "1",
        gridRowEnd: "13",
    },
    template_warp_graph: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
        gridRowStart: "1",
        gridRowEnd: "13",
    },
    template_content: {
        gridColumnStart: "7",
        gridColumnEnd: "13",
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
    template_parallax: {
        gridColumnStart: "1",
        gridColumnEnd: "13",
        gridRowStart: "1",
        gridRowEnd: "13",
    },
    template_warp_graph: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
        gridRowStart: "1",
        gridRowEnd: "13",
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
