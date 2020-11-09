import React from 'react';
import UsersContainer from './containers/UsersContainer'
import { connect } from 'react-redux'
import HomePage from './components/HomePage'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        <HomePage/>
        <UsersContainer/>
      </div>
    );
  }
  
}

export default connect()(App);
