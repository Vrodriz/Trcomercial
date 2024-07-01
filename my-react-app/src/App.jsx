import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import './assets/style.css';

function App() {
    return (
        <div className="bg-black">
            <Header />
            <Main />
            <About />
        </div>
    );
}

export default App;
