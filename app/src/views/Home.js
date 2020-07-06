import React from 'react';

import Item from '../components/Item.js';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.sort = this.sort.bind(this);
    }

    sort(e) {
        console.log(e.target.value);

        let {items} = this.props;

        items = items.sort( (a, b) => {
            return 'desc' === e.target.value ? b.price - a.price : a.price - b.price;
        } );

        this.setState({
            items
        });
    }

    render() {

        let {items} = this.props;

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