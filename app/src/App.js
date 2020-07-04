import React from 'react';
import LifeCycleDemo from "./components/LifeCycleDemo";
import Mail from "./components/Mail";
import ErrorDemo from "./components/ErrorDemo";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pVal: 1,
            pVal2: 1
        }
    }

    render() {
        return (
            <div className="App">
                {/*<button onClick={() => {*/}
                {/*    this.setState({*/}
                {/*        pVal2: this.state.pVal2 + 1*/}
                {/*        // pVal: this.state.pVal + 1*/}
                {/*    })*/}
                {/*}}>父组件的按钮</button>*/}
                {/*<hr/>*/}
                {/*<LifeCycleDemo val={this.state.pVal} />*/}

                {/*<hr />*/}
                <ErrorDemo />
            </div>
        )
    }
}

export default App;
