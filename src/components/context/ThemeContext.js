import React from 'react';
const ThemeContext = React.createContext("Light-Dark");

export const ThemeProvider = SystemContext.Provider;
export const ThemeConsumer = SystemContext.Consumer;
export default ThemeContext;