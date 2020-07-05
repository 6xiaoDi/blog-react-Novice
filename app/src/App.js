import React from 'react';

import Home from './views/Home';
import About from './views/About';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(window.location);

        let hash = window.location.hash || '#home';

        console.log(hash);

        return (
            <div className="App">
                {/*<Home/>*/}
                {/*<About/>*/}

                {
                    hash === '#home' && <Home />
                }

                {
                    hash === '#about' && <About />
                }
            </div>
        )
    }

}

export default App;