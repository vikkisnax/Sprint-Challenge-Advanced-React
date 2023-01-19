import React from 'react';
import Card from './components/Card';
import './App.css';
import data from './data';

import NavBar from './components/NavBar';


//class component - why is this red?
class App extends React.Component {

  //state
  constructor(){
    super();
    this.state = {
      // women: [{name: 'v'}], //test
      women: [],
    };
  }

  //put data into state
  componentDidMount(){
    this.setState({women: data.data})
  }


  render(){
    return (
      <div className="App">
        {/* <NavBar /> */}
        <div className="nameList">
          <Card 
            data={data.data} 
            // search={this.state.searchUser}
          />
        </div>
      </div>
    );
  }
}

export default App;
