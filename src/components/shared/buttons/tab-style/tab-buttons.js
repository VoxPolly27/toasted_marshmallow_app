import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorElement from 'components/error/error-element/error-element';

/**
 * Tab-like buttons used for varios scenarios
 * Accepts an array of objects
 * @augments {Component<Props, State>}
 */
var TabButtons = (props) => {
    if (props.tabs == null) {
        return <ErrorElement message="No Tabs Added" />
    }

    const renderTabs = (tabs) => {
        return tabs.map((tab) => {
            const { title, callBack } = tab //destructuring
            return (
                <p onClick={callBack} className='m-h-0 m-v-0 text-xsm text-center bebas tms-text-primary-hover transition-quick flex-1'>{title}</p>
            )
        })
    }

    return (
        <div className='d-flex m-10'>
            {renderTabs(props.tabs)}
        </div>
    )

}

export default TabButtons;

TabButtons.propTypes = {
    tabs: PropTypes.array,
}

const tabsExampleProps = [
    {
        title: "Some Title",
        callBack: () => { alert("No function programmed") }
    }
]

