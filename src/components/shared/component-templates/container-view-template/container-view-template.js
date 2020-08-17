import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorElement from 'components/error/error-element/error-element';
import Loader from 'components/loaders/spinner-page/Loading';
//Container for the view matching the route:

/**
 * Responsible for fetching some data and rendering a particular view
 * @augments {Component<Props, State>}
 */
class _Container extends Component {
    static contextType = SomeContext; // I beleive this can just refer to some context provider higher up in the component tree

    state = {
        isLoaded: false,
        hasError: false,
        loadingMessage: "",
        errorMessage: "",

        data_someData: [],
        state_someProgramState: false,
        callback_someCallback: null,
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
        } = this.state;

        return (
            <_View
                isLoaded={}
                hasError={}
                loadingMessage={}
                errorMessage={}

                data_someData={}
                callback_someCallback={}
                state_someState={}
            />
        );
    }
}

export default component;

/**
 * Responsible for rendering _ Component interface
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
const SomeComponent = (props) => {
    var {
        isLoaded, hasError,
        errorMessage, loadingMessage,
        ...rest,
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

const template_SomeTemplate = { // This template becomes useful when the component is rendered inside a grid layout
    gridColumnStart: "",
    gridColumnEnd: "",
    gridRowStart: "",
    gridRowEnd: "",
};