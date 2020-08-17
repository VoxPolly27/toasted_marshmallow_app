import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from 'components/context';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { Helmet } from 'react-helmet';
import FeatureFirst from './company-features/feature_1';
import FeatureSecond from './company-features/feature_2';
import FeatureThird from './company-features/feature_3';
import FeatureFourth from './company-features/feature_4';
import FeatureFifth from './company-features/feature_5';

//Container for the view matching the route:

/**
 * Responsible for fetching some data and rendering a particular view
 * @augments {Component<Props, State>}
 */
class CompanyContainer extends Component {
    static contextType = AppContext; // I beleive this can just refer to some context provider higher up in the component tree

    state = {
        isLoaded: false,
        hasError: false,
        loadingMessage: "",
        errorMessage: "",
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
            loadingMessage,
            errorMessage,
        } = this.state;

        return (
            <Fragment>
                <Helmet>
                    <title>Toasted Marshmallow Software Company</title>
                    <meta name="description" content="We're a relatively new software company based in South Africa. Our team of developers enjoy nothing more than creating world class mobile-friendly apps, websites, web-apps, and specialized software solutions." />
                </Helmet>  
                <CompanyView
                    isLoaded={isLoaded}
                    hasError={hasError}
                    loadingMessage={loadingMessage}
                    errorMessage={errorMessage}
                    data_width={this.context.data_width}
                    data_height={this.context.data_height}
                    />
            </Fragment>
        );
    }
}

export default CompanyContainer;

/**
 * Responsible for rendering _ Component interface
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
const CompanyView = (props) => {
    var {
        isLoaded, hasError,
        errorMessage, loadingMessage,

        data_height,data_width,
        ...rest
    } = props;


    return (
        <Fragment>

            <GridContainer className='d-grid m-0 p-0' style={template_company_layout}>

                <FeatureFirst />

                <FeatureSecond />

                <FeatureThird data_width={data_width} data_height={data_height}/>

                <FeatureFourth data_width={data_width} data_height={data_height}/>

                <FeatureFifth data_width={data_width} data_height={data_height}/>

            </GridContainer>
        </Fragment>
    )
}

CompanyView.propTypes = {
    isLoaded: PropTypes.bool,
    hasError: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    data_width: PropTypes.number,
    data_height: PropTypes.number,

}

const template_company_layout = {
    gridTemplateColumns: 'repeat(1, auto)',
    gridTemplateRows: 'repeat(5, 100vh)',
    width: '100vw',
    maxWidth: '100vw',
}




