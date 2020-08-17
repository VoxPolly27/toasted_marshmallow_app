import React, { Component } from 'react';

//Container for the view matching the route:

/**
 * Responsible for fetching some data and rendering a particular view
 * @augments {Component<Props, State>}
 */
class _Container extends Component {
    static contextType = SomeContext; // I beleive this can just refer to some context provider higher up in the component tree

    state = {
        isLoaded: false,
        hasError: false,
        loadingMessage: "",
        errorMessage: "",

        data_someData: [],
        state_someProgramState: false,
        callback_someCallback: null,
    }

    componentDidMount() {
        // Run Api Calls
        // Updated Certain properties base on context
        this.setState({
            isLoaded: true,
        }) 
    }

    render() {
        var {
        } = this.state;

        return (
            <_View
                isLoaded={}
                hasError={}
                loadingMessage={}
                errorMessage={}

                data_someData={}
                callback_someCallback={}
                state_someState={}
            />
        );
    }
}

export default component;