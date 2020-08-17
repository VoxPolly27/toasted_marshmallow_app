import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Large Outlined Button
 * @augments {Component<Props, State>}
 */
var LargeButton = (props) => {
    return (
        <button disabled={props.disabled ? props.disabled : false} onClick={props.callBack} className='cursor-pointer p-10 b-2 tms-border-accent-primary text-center bolded tms-hover transition-quick'>
                {props.children}
        </button>
        )
}

export default LargeButton;

LargeButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    callBack : PropTypes.func,
    disabled: PropTypes.bool,
}
