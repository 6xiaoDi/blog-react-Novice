import React from 'react';

import Item from '../components/Item.js';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        // 默认降序，赋给state
        this.state = {
            items: this.doSort('desc')
        };

        this.sort = this.sort.bind(this);
    }

    sort(e) {
        console.log(e.target.value);

        let items = this.doSort(e.target.value);
        this.setState({
            items
        });
    }

    doSort(type = 'desc') {
        let {items} = this.props;

        return items.sort( (a, b) => {
            return 'desc' === type ? b.price - a.price : a.price - b.price;
        } );
    }

    render() {

        // 取默认排序好的items
        let {items} = this.state;

        // 从 url 的 querystring 上来获取
        console.log(window.location);
        console.log(window.location.search);
        console.log(window.location.search.substring(1));

        return (
            <div>
                <h2>商品列表</h2>

                <select onChange={this.sort}>
                    <option value="desc">降序</option>
                    <option value="asc">升序</option>
                </select>

                <ul className="item-list">
                    <li className="head">
                        <span>名称</span>
                        <span>价格</span>
                    </li>
                    {
                        items.map( item => <Item item={item} key={item.id} /> )
                    }
                </ul>
            </div>
        );
    }

}