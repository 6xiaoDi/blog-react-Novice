import React from 'react';

import Item from '../components/Item.js';

export default class Home extends React.Component {

    render() {
        
        let {items} = this.props;

        items = items.sort( (a, b) => {
            return b.price - a.price;
        } );

        return (
            <div>
                <h2>商品列表</h2>

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