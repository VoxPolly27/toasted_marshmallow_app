import React, { Component, Fragment } from 'react';
import { NavMenu } from 'components/layout-elements/navigation/navigation-menu';
import FloatingButtons from '../layout-elements/floating-buttons/floating-buttons';


export class Layout extends Component {

    render() {
        return (
        <Fragment>
            <NavMenu />
            {this.props.children}
            <FloatingButtons />
        </Fragment>
        )
    } 
}
