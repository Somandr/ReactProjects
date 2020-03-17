import React, { Component } from 'react';
import axios from 'axios';

class App extends Component() {
    state = {
        emails: []
    };

    componentDidMount() {
        const emails = axios('/emails.json');
        emails.then(result => {
            this.setState({ eamils: result.data });
        });
    }
  render() {
    const { emails } = this.state;

    const emailCards = this.state.emails.map(email => {
      return (
        <div key={ email.id }>
          <h2>{ email.topic }</h2>
          <p>{ email.body }</p>
        </div>
      )
    })
    return <div className="App">
        {emailCards}
        </div>;
    }
}

export default App;
