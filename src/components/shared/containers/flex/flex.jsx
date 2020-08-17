import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Flex Container
 * The predefined container for a flex component (d-flex)
 * @augments {Component<Props, State>}
 */
var FlexContainer = (props) => {
    return (<div className={(props.className) ? props.className : "d-flex"} style={props.style}>{props.children}</div>)
} 

FlexContainer.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,

    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default FlexContainer;


