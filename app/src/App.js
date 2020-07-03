import React from 'react';
import FormDemo from "./components/FormDemo";
import UnControl from "./components/UnControl";
import RefDemo from "./components/RefDemo";
import PropsDefaultValueDemo from "./components/PropsDefaultValueDemo";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            v1: 1
        }
    }

    render() {
        return (
            <div className="App">

                {/*<FormDemo />*/}

                {/*<hr/>*/}

                {/*<UnControl value={this.state.v1} />*/}

                {/*<RefDemo />*/}

                <PropsDefaultValueDemo />
                <PropsDefaultValueDemo max={1000} />
            </div>
        )
    }

}

export default App;
