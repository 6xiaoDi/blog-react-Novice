import React from 'react';
import LifeCycleDemo from "./components/LifeCycleDemo";
import Mail from "./components/Mail";

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
                <hr />
                <Mail />
            </div>
        )
    }
}

export default App;
