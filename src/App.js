import React, { Component } from 'react'
import { HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import Admin from './containers/admin/admin';
import Phone from './containers/childRouter_component/phone';
import TV from './containers/childRouter_component/tv';
import Login from './containers/login/login';
export default class App extends Component {
 render() {
   
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/phone" component={Phone} />
            <Route path="/tv" component={TV}/> 
            <Redirect to="/login"/>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}

