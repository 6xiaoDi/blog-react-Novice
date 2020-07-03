import React from 'react';
import FormDemo from "./components/FormDemo";
import UnControl from "./components/UnControl";
import RefDemo from "./components/RefDemo";
import PropsDefaultValueDemo from "./components/PropsDefaultValueDemo";
import PropTypesDemo from "./components/PropTypesDemo";


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

                {/*<PropsDefaultValueDemo />*/}
                {/*<PropsDefaultValueDemo max={1000} />*/}
                {/*<PropTypesDemo max={10} />*/}
                {/*<PropTypesDemo max={'csdn'} />*/}
                <PropTypesDemo />
            </div>
        )
    }

}

export default App;
