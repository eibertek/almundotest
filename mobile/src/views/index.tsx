import React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { store } from '../store/redux';
import Routes from './Routes';
import { NavigatorInstance } from '../store/redux/actions/@types';

const App = () => {
    return (
    <Provider store={store}>
            <ThemeProvider>            
                <Routes ref={(nav) => {
                    if(nav) {
                        NavigatorInstance.dispatch = nav.dispatch
                    }
                }} />
            </ThemeProvider>
    </Provider>
    )
};

export default App;
