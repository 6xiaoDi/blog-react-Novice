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
                <button onClick={() => {
                    this.setState({
                        pVal: this.state.pVal + 1
                    })
                }}>父组件的按钮</button>
                <hr/>
                <LifeCycleDemo val={this.state.pVal}/>
            </div>
        )
    }
}

export default App;
