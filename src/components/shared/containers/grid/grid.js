import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Container for Grid Layouts
 * @augments {Component<Props, State>}
 */
var GridContainer = (props) => {
        return (
            <div className={(props.className) ? props.className : "d-grid"} style={props.style}>
                {props.children}
            </div>
        );
}

GridContainer.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,

    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default GridContainer;

/**
 * Container for Grid Elements to be used within GridContainers
 * @augments {Component<Props, State>}
 */
const GridElement = (props) => {
    return (<div className={props.className} style={props.style} >{props.children}</div>)
}

GridElement.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}



var template_gridshape = (CS,CE,RS,RE) => 
{
    return {
        gridColumnStart: `${CS}`,
        gridColumnEnd: `${CE}`,
        gridRowStart: `${RS}`,
        gridRowEnd: `${RE}`,
    }
}

export {
    GridElement,
    template_gridshape
}
