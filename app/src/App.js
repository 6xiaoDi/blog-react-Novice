import React from 'react';
import Home from "./views/Home";
import About from "./views/About";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          <Home/>
          <About/>
        </div>
    )
  }

}
export default App;
