import React from 'react';

import {Route, Link} from 'react-router-dom';

import './css.css';

import Home from './views/Home';
import About from './views/About';
import View from "./views/View";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'iPhone XR',
                    price: 542500
                },
                {
                    id: 2,
                    name: 'Apple iPad Air 3',
                    price: 377700
                },
                {
                    id: 3,
                    name: 'Macbook Pro 15.4',
                    price: 1949900
                },
                {
                    id: 4,
                    name: 'Apple iMac',
                    price: 1629900
                },
                {
                    id: 5,
                    name: 'Apple Magic Mouse',
                    price: 72900
                },
                {
                    id: 6,
                    name: 'Apple Watch Series 4',
                    price: 599900
                }
            ]
        }
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

                <Route path="/" exact render={() => <Home items={this.state.items} />} />

                {/*商品详情*/}
                <Route path='/view' component={View}/>
                <Route path="/about" component={About}/>
            </div>
        )
    }

}

export default App;