import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import State2City from './views/state2-city'
import SearchByState from './views/search-by-state'
import State2Zip from './views/state2-zip'
import Faq from './views/faq'
import ContactUs from './views/contact-us'
import About from './views/about'
import ItemDetail from './views/item-detail'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={State2City} exact path="/state2-city" />
        <Route component={SearchByState} exact path="/search-by-state" />
        <Route component={State2Zip} exact path="/state2-zip" />
        <Route component={Faq} exact path="/faq" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={About} exact path="/about" />
        <Route component={ItemDetail} exact path="/item-detail" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
