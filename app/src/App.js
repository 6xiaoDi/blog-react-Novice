import React from 'react';
import LifeCycleDemo from "./components/LifeCycleDemo";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pVal: 1
        }
    }

    render() {
        return (
            <div className="App">
                <LifeCycleDemo val={this.state.pVal}/>
            </div>
        )
    }
}

export default App;
