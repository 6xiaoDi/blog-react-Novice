import React from 'react';

export default class View extends React.Component {

    render() {

        // 解构
        let {items, match: {params: {id}}} = this.props;
        id = Number(id);

        let item = items.find( v => v.id === id );

        console.log(items, id, item);

        return(
            <div>
                <h2>商品详情 - {item.name}</h2>
                <p>其它一些详情信息...</p>
            </div>
        );
    }

}