import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import RootNavigation from './routes/RootNavigation';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <RootNavigation />
        </>
    );
};

export default App;
