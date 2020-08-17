import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import "styles/main.css";
import { AppProvider } from './components/context';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/global';
import { lightTheme, darkTheme } from 'components/theme';
import { Layout } from 'components/layouts/Layout';

import { Home } from 'components/views/home/Home';
import { Company } from './components/views/company/Company';
import { Solutions } from './components/views/solutions/Solutions';
import { Contact } from './components/views/contact/Contact';
import SolutionsUI from './components/views/solutions/solutions-ui/solutions_UI';
import SolutionsMobile from './components/views/solutions/solutions-webapps/solutions_WebApps';
import SolutionsApps from './components/views/solutions/solutions-apps/solutions_Apps';
import SolutionsWebSites from './components/views/solutions/solutions-websites/solutions_WebSites';
import { ErrorPage } from './components/views/error/ErrorPage';
import ToastedLoader from './components/shared/loaders/toasted-loader/toasted-loader-view';
import TMAppRouter from './components/tm-app-router';

import HomeContainer from 'components/views/home/home-view';
import CompanyContainer from './components/views/company/company-container';
import ContactContainer from './components/views/contact/contact-container';

export default class App extends Component {
    static displayName = App.name;
    constructor() {
        super()
        this.state = {
            state_dark: true,
            data_width: window.outerWidth,
            data_height: window.innerHeight,
            data_mouse_x: 0,
            data_mouse_y: 0,
        }
    }


    handleTheme = () => {
        if (this.state.state_dark === false) {
            return lightTheme;
        } else if (this.state.state_dark === true) {
            return darkTheme;
        }
    }

    handle_theme_change = () => {
        this.setState(prevState => ({
            state_dark: !prevState.state_dark
        }));
    }

    handle_window_size = () => {
        this.setState({
            data_width: window.outerWidth,
            data_height: window.innerHeight,
        });
    };


    componentDidMount() {
        window.addEventListener('resize', this.handle_window_size);

        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handle_window_size);

    }



    render() {

        return (
            <AppProvider value={{
                data_height: this.state.data_height,
                data_width: this.state.data_width,
                callback_handle_theme_update : this.handle_theme_change
            }}>
                <ThemeProvider theme={this.handleTheme()}>
                    <GlobalStyles />
                    <Switch>
                        <TMAppRouter exact path='/' component={HomeContainer} layout={Layout} />
                        {/* <TMAppRouter path='/company' component={CompanyContainer} layout={Layout} />
                        <TMAppRouter path='/contact' component={ContactContainer} layout={Layout} />
                        <TMAppRouter path='/solutions' component={Solutions} layout={Layout} />
                        <TMAppRouter path='/solutions/uiux' component={SolutionsUI} layout={Layout} />
                        <TMAppRouter path='/solutions/mobile' component={SolutionsMobile} layout={Layout} />
                        <TMAppRouter path='/solutions/webapps' component={SolutionsApps} layout={Layout} />
                        <TMAppRouter path='/solutions/websites' component={SolutionsWebSites} layout={Layout} /> */}
                        <Route component={HomeContainer}  layout={Layout}/>
                        
                    </Switch>
                </ThemeProvider>
            </AppProvider>
            )
    }
}

