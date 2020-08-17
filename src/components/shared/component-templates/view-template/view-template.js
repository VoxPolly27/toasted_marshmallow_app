import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ErrorElement from 'components/error/error-element/error-element';
import Loader from 'components/loaders/spinner-page/Loading';
/**
 * Responsible for rendering _ Component interface
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
const SomeComponent = (props) => {
    var {
        isLoaded, hasError,
        errorMessage, loadingMessage
    } = props;

    if (!isLoaded) {
        return (<ComponentSkeleton />)
    }

    if (hasError) {
        return (<Error />)
    }

    return (
        <Fragment>
            <GridElement className="" style={template_SomeTemplate}>
            </GridElement>
        </Fragment>
    )
}

SomeComponent.propTypes = {
    isLoaded: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    callback_somecallback: PropTypes.func,

    state_someState: PropTypes.bool,

    data_someData: PropTypes.array,
}

export {
    SomeComponent
}

const template_SomeTemplate = { // This template becomes useful when the component is rendered inside a grid layout
    gridColumnStart: "",
    gridColumnEnd: "",
    gridRowStart: "",
    gridRowEnd: "",
};