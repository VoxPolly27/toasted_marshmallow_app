import React from 'react';
import PropTypes from 'prop-types';

class LandingViewContainer extends Component {
    state = {
        isLoaded : false,
    }

    componentDidMount() {
        this.setState({
            isLoaded : true,
        })
    }

    render() {
        var {
            isLoaded
        } = this.state;

        return (
            <LandingView />
        );
    }
}

export default LandingViewContainer;


var LandingView = (props) => {

}

LandingView.propTypes = {
    isLoaded: PropTypes.string,

}