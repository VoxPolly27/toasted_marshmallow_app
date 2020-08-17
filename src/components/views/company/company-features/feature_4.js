import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';
import HexGrid from 'components/shared/vanity-lab/hexgrid/hex-grid-container';

/**
 * Responsible for rendering a feature from the company page
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
var FeatureFourth = (props) => {
    var {
        data_height,
        data_width,
    } = props;

    return (
        <Fragment>
            <GridContainer className='tm-bg-inverse tm-primary d-grid' style={template_feature}>
                <GridElement style={template_feature_heading}>
                    <h1 className='text-xl tm-red bolded b-bottom-2 tm-border-inverse'>Mission Statement</h1>
                    <h4 className='text-md tm-grey'>this.missionStatement = reasonYouWantToWorkWithUs</h4>
                </GridElement>

                <GridElement style={template_feature_hero}>
                    <HexGrid data_width={data_width*0.99} data_height={data_height * 0.45}/>
                </GridElement>

                <GridElement style={template_feature_description}>
                    <p className='segoe'>
                        We build software that we would be happy use. If business growth is your goal we try grow your business with proven techniques. We build long lasting relationships with our clients and perform our work to the highest standards. We aim to address business needs, not software needs. Finally, we maintain trendy and current through continuous innovation and an open corporate culture. 
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
    gridColumnEnd: "10",
    gridRowStart: "3",
    gridRowEnd: "5",
};

const template_feature_description = {
    gridColumnStart: "3",
    gridColumnEnd: "10",
    gridRowStart: "6",
    gridRowEnd: "8",
};

const template_feature_hero = {
    gridColumnStart: "1",
    gridColumnEnd: "13",
    gridRowStart: "8",
    gridRowEnd: "12",
}



FeatureFourth.propTypes = {
    data_width: PropTypes.number,
    data_height: PropTypes.number,
}

export default FeatureFourth;