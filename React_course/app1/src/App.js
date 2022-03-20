import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todo from './MyComponents/Todo'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import { About } from './MyComponents/About';
import { Contact } from './MyComponents/Contact';
import { Home } from './MyComponents/Home';
import { NoMatch } from './MyComponents/NoMatch';
import { Layout } from './MyComponents/Layout'
import {Navigate} from './MyComponents/Navigate'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/component" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;
