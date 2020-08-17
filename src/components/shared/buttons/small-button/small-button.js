import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Samll Outlined Button
 * @augments {Component<Props, State>}
 */
var SmallButton = (props) => {
    return(
        <button disabled={props.disabled ? props.disabled : false} onClick={props.callBack} className='text-xxsm cursor-pointer p-2 m-2 b-2 tms-border-accent-primary text-center bolded tms-hover transition-quick'>
            {props.children}
        </button>
    )
}

export default SmallButton;

SmallButton = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    callBack: PropTypes.func,
    disabled: PropTypes.bool
}
