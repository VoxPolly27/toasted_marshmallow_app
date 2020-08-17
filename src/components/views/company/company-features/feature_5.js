import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';
import WarpGraphContainer from '../../../shared/vanity-lab/warp-graph/warp-graph';

/**
 * Responsible for rendering a feature from the company page
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
var FeatureFifth = (props) => {
    var {
        data_height,
        data_width,
    } = props;

    return (
        <Fragment>
            <GridContainer className='d-grid' style={template_feature}>
                <GridElement style={template_feature_heading}>
                    <h1 className='text-xl tm-red bolded b-bottom-2 tm-border-inverse'>Social</h1>
                    <h4 className='text-md tm-grey'>(you)-[:SHOULD_FOLLOW]->(us)</h4>
                </GridElement>

                <GridElement style={template_feature_hero}>
                    <WarpGraphContainer
                        data_height={data_height * 0.4}
                        data_width={data_width * 0.99}
                        state_warp_graph_type={3}
                        data_number_of_layers={5}
                    />
                </GridElement>

                <GridElement style={template_feature_description}>
                    <p className='segoe'>
                        The tech community in a developing country follows a unique trajectory. Follow our social media accounts for insight into what we are working on and experiencing.
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
    gridRowStart: "4",
    gridRowEnd: "6",
};

const template_feature_description = {
    gridColumnStart: "3",
    gridColumnEnd: "8",
    gridRowStart: "7",
    gridRowEnd: "9",
};

const template_feature_hero = {
    gridColumnStart: "1",
    gridColumnEnd: "13",
    gridRowStart: "9",
    gridRowEnd: "13",
}



FeatureFifth.propTypes = {
    data_width: PropTypes.number,
    data_height: PropTypes.number,
}

export default FeatureFifth;