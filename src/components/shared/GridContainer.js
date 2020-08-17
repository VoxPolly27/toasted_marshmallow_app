import React, { Component } from 'react';

class GridSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={this.props.className} style={this.props.gridTemplate}>
                {this.props.children}
            </div>
        );
    }
}

export default GridSection;


export class GridElement extends Component {
    state = {}
    render() {
        return (
            <div className={this.props.className} style={this.props.gridTemplate}>
                {this.props.children}
            </div>
        );
    }
}

