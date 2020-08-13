import React from 'react';
import './App.css';
import Call from './component/test';
import Call2 from './component/test2';


class App extends React.Component{
  constructor(props){
    super();
  }
  
  render(){
    return(
      <div className="App">
        <Call/>
      </div>

    )
  }

}

export default App;
