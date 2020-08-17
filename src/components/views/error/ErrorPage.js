import React, { Component } from 'react';
import { Error } from 'components/Main/Error';
import { Page } from "components/Main/Page";

export class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }


    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };



    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnnount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    render() {
        return (
            <Error width={this.state.width} height={this.state.height}/>
            )
    }
}
