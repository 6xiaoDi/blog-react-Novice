import React from 'react';

import {Route, Link} from 'react-router-dom';

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
                <nav>
                    <Link to="/">首页</Link>
                    <span> | </span>
                    <Link to="/about">关于我们</Link>
                </nav>
                <hr/>
                <input type="text"/>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About}/>
            </div>
        )
    }

}

export default App;