import React from 'react';
import Card from './components/Card';
import './App.css';
import data from './data';
import NavBar from './components/NavBar';


//can't use hooks 
class App extends React.Component {

  //state
  constructor(){
    super();
    this.state = {
        women: [],
    };
  }

  //put data into state
  componentDidMount(){
    this.setState({women: data.data})
    console.log("App: Mounted - data");
  }

  render(){
    return (
      <div className="App">
        <h1>APP: Women's World Cup players</h1>
    
          <NavBar />
       
        <div className="nameList">
          <Card 
            data={data.data} 
          />
        </div>
      </div>
    );
  }
}

export default App;
