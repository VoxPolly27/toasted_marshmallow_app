import React from 'react';

//This is for letting the application know which theme is selected
const AppContext = React.createContext({});
const AppProvider = AppContext.Provider;
const AppConsumer = AppContext.Consumer;


const ThemeContext = React.createContext({});
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export {
    AppContext,
    AppProvider,
    AppConsumer,
    ThemeProvider,
    ThemeConsumer,
    ThemeContext,
}