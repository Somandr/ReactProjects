import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
// test-tunnel-01
const App = props => {
    return (
        <div className="app-wrapper d_grid">
            <Header />
            <Sidebar />
            <div className="app-wrapper-content">
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                    )}
                />
                <Route
                    path="/dialogs"
                    render={() => <Dialogs store={props.store} />}
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;
