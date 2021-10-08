import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends Component {
    state = {

    };

    render() {
        return(
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;