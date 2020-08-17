import React, { Component }  from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { Spinner } from './node_modules/reactstrap';

/**
 * LoaderElement Component
 * This is a generic loader that is used as a place holder while API calls are resolving
 * @augments {Component<Props, State>}
 */
class LoaderElement extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        return (
            <div className='d-flex flex-1 align-content-center'>
                <div className='d-flex flex-1 flex-column text-center align-items-center justify-content-center'>
                    <Spinner className={this.props.className} grow={props.grow? props.grow : false}/>
                    { this.props.message ? <p className='text-xxsm mont tms-primary'>{this.props.message}</p> : null }
                </div>
            </div>
        );
    }
}

export default LoaderElement;

LoaderElement.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    grow : PropTypes.bool
}
