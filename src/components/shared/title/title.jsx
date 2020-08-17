import React from 'react';
import PropTypes from 'prop-types';

/**
 * A title element for DarkWarehouse
 * @augments {Component<Props, State>}
 */
const Title = (props) => {
    return (<p className={props.className} style={props.style}><span className='bolded p2 tms-text-primary'>Dark<span className='tms-text-accent-primary'>W</span>arehouse</span></p>)
}

export default Title;

Title.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}

