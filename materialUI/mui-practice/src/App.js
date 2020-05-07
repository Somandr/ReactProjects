import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card/Card';
import Header from './components/Header';

function App() {
    return (
      <div className="App">
        <Header/>
            <h1>MUI</h1>
            <Card>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </Card>
        </div>
    );
}

export default App;
