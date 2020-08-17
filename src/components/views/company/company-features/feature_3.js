import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';
import Portal from 'components/shared/vanity-lab/portal/portal';
import LargeButton from '../../../shared/buttons/large-button/LargeButton';

/**
 * Responsible for rendering a feature from the company page
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
var FeatureThird = (props) => {
    var {
        data_height,
        data_width,
    } = props;

    return (
        <Fragment>
            <GridContainer style={template_feature}>
                <GridElement style={template_feature_heading}>
                    <h1 className='text-xl tm-red bolded b-bottom-2 tm-border-inverse'>Find us</h1>
                    <h4 className='text-md tm-grey'>var you = “glad you did”</h4>
                </GridElement>

                <GridElement style={template_feature_hero}>
                    <Portal data_width={data_width*0.5} data_height={data_height*2} />
                </GridElement>

                <GridElement style={template_feature_description}>
                    <p className='segoe'>
                        We are based in Pretoria within the Republic of South Africa. Being a small start-up, we don’t have big glass offices (yet). So contact us by dropping a message in our Contact Us form. We’ll be sure to contact you back. 
                    </p>
                </GridElement>

                <GridElement className='text-xsm' style={template_feature_callback}>
                    <LargeButton> Get in touch </LargeButton>
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
    gridRowStart: "3",
    gridRowEnd: "5",
};

const template_feature_description = {
    gridColumnStart: "3",
    gridColumnEnd: "7",
    gridRowStart: "6",
    gridRowEnd: "9",
};

const template_feature_hero = {
    gridColumnStart: '7',
    gridColumnEnd: "12",
    gridRowStart: "6",
    gridRowEnd: "13",
}

const template_feature_callback = {
    gridColumnStart: "3",
    gridColumnEnd: "7",
    gridRowStart: "9",
    gridRowEnd: "10",
}

FeatureThird.propTypes = {
    data_width: PropTypes.number,
    data_height: PropTypes.number,
}

export default FeatureThird;