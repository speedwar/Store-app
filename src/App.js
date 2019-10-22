import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AkHome } from './components/pages';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ak-app">
          <main className="l-container">
            <Switch>
              <Route path="/" exact component={AkHome} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
