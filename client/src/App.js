import React from "react";
import Home from './components/Home.js';
import Regions from './components/Regions'
import RegionComponent  from './components/RegionComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      regionList: [{id: 1, name: 'Central Asia'}, {id: 2, name: 'East Asia'}, {id: 3, name: 'South Asia'}, {id: 4, name: 'SouthEast Asia'}, {id: 5, name: 'West Asia'}],
      countryList: [{id: 11, name: 'Kyrgyzstan', region: 'Central Asia'}, {id: 12, name: 'Tajikistan', region: 'Central Asia'}, {id: 13, name: 'Kazakhstan', region: 'Central Asia'}],
      displayRegion: ''
    }
  }

  setRegion = (name) => {
    const {regionList, countryList, displayRegion} = this.state;
    this.setState({displayRegion: name})
    
  }

  render(){
    const {countryList, regionList, displayRegion} = this.state;
  return (
    <Router>
      <p>211321 Kushtar's code added</p>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Regions regionList = {regionList} setRegion = {this.setRegion}/>
        <RegionComponent countryList = {countryList} displayRegion = {displayRegion}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
