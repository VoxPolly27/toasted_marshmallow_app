import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from 'components/context';
import GridContainer, { GridElement } from 'components/shared/containers/grid/grid';
import { Helmet } from 'react-helmet';
import { ReactComponent as LogoLight } from 'components/assets/LogoLight.svg';
import LargeButton from 'components/shared/buttons/large-button/LargeButton';
//Container for the view matching the route:

/**
 * Responsible for fetching some data and rendering a particular view
 * @augments {Component<Props, State>}
 */
class ContactContainer extends Component {
    static contextType = AppContext; // I beleive this can just refer to some context provider higher up in the component tree

    state = {
        isLoaded: false,
        hasError: false,
        loadingMessage: "Putting together contact for you.",
        errorMessage: "",
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
            isLoaded,
            hasError,
            loadingMessage,
            errorMessage,
        } = this.state;

        return (
            <Fragment>
                <Helmet>
                    <title>Toasted Marshmallow Software Contact</title>
                    <meta name="contact" content="Get in touch and we'll create some elegant solutions together" />
                </Helmet>
                <ContactView
                    isLoaded={isLoaded}
                    hasError={hasError}
                    loadingMessage={loadingMessage}
                    errorMessage={errorMessage}
                    data_width={this.context.data_width}
                    data_height={this.context.data_height}
                />
            </Fragment>
        );
    }
}

export default ContactContainer;

/**
 * Responsible for rendering Contact Component interface
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
const ContactView = (props) => {
    var {
        isLoaded, hasError,
        errorMessage, loadingMessage,

        data_height, data_width,
        ...rest
    } = props;


    return (
        <Fragment>

            <GridContainer className='d-grid m-0 p-0' style={template_contact_layout}>
                <GridElement className='tm-border-red b-left-2 b-v-2 p-10 d-flex flex-column justify-content-center align-items-center m-v-20' style={template_contact_form}>
                    <h1 className='bolded text-left tm-red b-bottom-2 tm-border-inverse'>Get in touch</h1>
                    <p className='segoe '> You'll be glad you did </p>
                    <LogoLight />
                </GridElement>

                <GridElement className='tm-bg-inverse tm-primary d-flex' style={template_description}>
                    <form className='flex-1 futura d-flex flex-column p-10'>

                        <span className='flex-1 d-flex flex-row align-items-center'>
                            <span className='m-h-5'></span>
                            <span className=''>Email Address</span>
                        </span>
                        <span className='flex-1 p-v-5 d-flex flex-row align-items-center'>
                            <input
                                required
                                className={className_loginFormInput} placeholder='someemail@somedomain.com'
                                //name="data_user_email" value={data_user_email}
                                //onChange={callback_handler_inputChange}
                            />
                        </span>

                        <span className='flex-1 d-flex flex-row align-items-center'>
                            <span className='m-h-5'></span>
                            <span className=''>Description</span>
                        </span>
                        <span className='flex-5 p-v-5 d-flex flex-column '>
                            <textarea
                                type='text'
                                required
                                //name="data_user_password" value={data_user_password}
                                className={className_loginFormInput}
                                placeholder='Password'
                            />
                            <span className='m-h-10 svg-md'></span>
                        </span>


                        <span className='flex-1 text-right m-v-10 p-top-10'>
                            <LargeButton>Submit</LargeButton>
                        </span>
                    </form>
                </GridElement>
            </GridContainer>
        </Fragment>
    )
}

const className_loginFormInput = "flex-1 m-0 p-v-5 p-h-20 bolded tm-bg-primary tm-inverse transition-quick p-v-5 b-bottom-2 tm-border-primary border-hover"


ContactView.propTypes = {
    isLoaded: PropTypes.bool,
    hasError: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    data_width: PropTypes.number,
    data_height: PropTypes.number,

}

const template_contact_layout = {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    width: '100vw',
    height: '100vh',
}

const template_description = {
    gridColumnStart: "6",
    gridColumnEnd: "10",
    gridRowStart: "4",
    gridRowEnd: "10",
}

const template_contact_form = {
    gridColumnStart: "4",
    gridColumnEnd: "6",
    gridRowStart: "4",
    gridRowEnd: "10",
}

