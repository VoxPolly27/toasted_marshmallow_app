import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';

/**
 * Responsible for rendering a feature from the company page
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
var FeatureSecond = (props) => {
    return (
        <Fragment>
            <GridContainer className='tm-bg-inverse tm-primary d-grid' style={template_feature}>
                <GridElement style={template_feature_heading}>
                    <h1 className='text-xl tm-red bolded b-bottom-2 tm-border-inverse'>Yes, we are new.</h1>
                    <h4 className='text-md tm-grey'>.buildCompany(..)</h4>
                </GridElement>

                <GridElement style={template_feature_hero}>

                </GridElement>

                <GridElement style={template_feature_description}>
                    <p className='segoe'>
                        We are a young tech start-up company with nothing to hide. The company was founded in mid-2019. We wanted to hit the South African market with a catchy name so we registered Toasted Marshmallow (Pty) Ltd.
                    </p>
                </GridElement>
            </GridContainer>
        </Fragment>
    )
}

const template_feature = {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
}

const template_feature_heading = {
    gridColumnStart: "3",
    gridColumnEnd: "7",
    gridRowStart: "5",
    gridRowEnd: "7",
};

const template_feature_description = {
    gridColumnStart: "3",
    gridColumnEnd: "7",
    gridRowStart: "8",
    gridRowEnd: "10",
};

const template_feature_hero = {
    gridColumnStart: "8",
    gridColumnEnd: "11",
    gridRowStart: "4",
    gridRowEnd: "8",
}



FeatureSecond.propTypes = {

}

export default FeatureSecond;