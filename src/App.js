import React from 'react';
import UsersContainer from './containers/UsersContainer'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        Hello World
        <UsersContainer/>
      </div>
    );
  }
  
}

export default App;
