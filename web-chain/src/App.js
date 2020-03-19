import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Chain from './containers/Chain/Chain'

class App extends Component {
    render() {
        return (
            <Layout>
                <Chain/>
            </Layout>
        );
    }
}

export default App;
