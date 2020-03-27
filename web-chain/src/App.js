import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Chain from './containers/Chain/Chain';
import Auth from './containers/Auth/Auth';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={'/auth'} component={Auth} />
                    <Route path={'/quiz-creator'} component={QuizCreator} />
                    <Route path={'/chain/:id'} component={Chain} />
                    <Route path={'/'} component={QuizList} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
