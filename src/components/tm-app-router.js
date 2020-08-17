import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { AppContext } from 'components/context';

class TMAppRouter extends Component {
    static contextType = AppContext;

    render() {

    var {
        component: Component, layout: Layout, ...rest
    } = this.props;


        return (
            <Route {...rest} render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )} />
        )
    }
         

}

export default TMAppRouter;


