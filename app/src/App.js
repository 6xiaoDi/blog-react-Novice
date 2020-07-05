import React from 'react';

import {Route} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <h1>React路由</h1>
                <hr/>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About}/>
                <nav>
                    <a href="#/">首页</a>
                    <span> | </span>
                    <a href="#/about">关于我们</a>
                </nav>
            </div>
        )
    }

}

export default App;