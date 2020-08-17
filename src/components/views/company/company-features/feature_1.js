import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';

/**
 * Responsible for rendering a feature from the company page
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
var FeatureFirst = (props) => {
    return (
        <Fragment>
            <GridContainer style={template_feature}>
                <GridElement style={template_feature_heading}>
                    <h1 className='text-xl tm-red bolded b-bottom-2 tm-border-inverse'>Who are we?</h1>
                    <h4 className='text-md tm-grey'>{"<queue>intro music</queue>"}</h4>
                </GridElement>

                <GridElement style={template_feature_hero}>
                    <MarshMallow id="Hero-Mallow" />

                </GridElement>

                <GridElement style={template_feature_description}>
                    <p className='segoe'>
                        Toasted Marshmallow (Pty) Ltd is a South African technology start-up company. We are a small collaboration of engineers and software developers that have united with the goal of making awesome tech experiences.
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



FeatureFirst.propTypes = {

}

export default FeatureFirst;