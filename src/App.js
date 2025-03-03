import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Calculator from './Components/Calculator';
import Results from './Components/Results';
import './styles.css';


function App() {
    return(
        <Provider store={Store}>
            <main className='container'>
                <Calculator/>
                <Results/>
            </main>            
        </Provider>
    )
}

export default App;