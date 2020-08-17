import React, { Component, Fragment } from './node_modules/react';
import { Col } from './node_modules/reactstrap';
import PropTypes from './node_modules/prop-types';

import './Loader.css';

/**
 * Full Page Loader
 * @augments {Component<Props, State>}
 */
class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {



        return (
          <div style={loaderTemplate} className='tms-bg-primary p-fixed'>
              <div className="spinner-box">
                  <div className="circle-border">
                        <div className="circle-core tms-bg-primary"></div>
                  </div>
              </div>
              <Col xs={12} className='text-center p-absolute d-block' style={loaderCaptionTemplate}>
                        <p className='Bolded tms-text-primary text-md'>{this.props.caption}</p>
                        <LoadingDots />
              </Col>
        </div>
        );
    }
}

export default Loader;

Loader.propTypes = {
    caption: PropTypes.string,
}

let loaderTemplate = {
    height: '100vh',
    width: '100vw',
    margin: '0',
    padding: '0'
}

let loaderCaptionTemplate = {
    margin: "auto",
    left: "0",
    top: "0",

}

/**
 * Pulsating Loading ellipses
 * @augments {Component<Props, State>}
 */
function LoadingDots() {
    return (
        <div className="spinner-box-text">
            <div className="pulse-container">
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
            </div>
        </div>
    )
}