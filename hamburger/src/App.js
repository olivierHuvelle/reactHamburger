import React , {Component} from 'react';
import Hamburger from './containers/Hamburger/Hamburger'
import './App.css';

import Layout from './components/Layout/Layout'

class App extends Component {
  render(){
    return(
      <Layout>
        <Hamburger/>
      </Layout>
    )
  }
}

export default App;
