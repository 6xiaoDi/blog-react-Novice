import React from 'react';

import Item from '../components/Item.js';
import qs from 'qs';
import Pagination from "../components/Pagination";

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
        // let items = this.doSort(e.target.value);
        // this.setState({
        //     items
        // });
        // 跳转页面
        let {history} = this.props;
        history.push(`/?sort=${e.target.value}`)
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
        let {location} = this.props;

        // let queryString = window.location.search.substring(1);
        let queryString = location.search.substring(1);
        // 作用：将queryString转为对象形式
        let qsTest = qs.parse(queryString, {ignoreQueryPrefix: true});
        let sort = qsTest.sort || 'desc';

        this.doSort(sort);
        let page = Number(qsTest.page) || 1;

        return (
            <div>
                <h2>商品列表</h2>

                <select defaultValue={sort} onChange={this.sort}>
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
                <hr/>

                <div>
                    {/*<Pagination page={page} pages={10} />*/}
                    <Pagination history={this.props.history} page={page} pages={10} />
                </div>
            </div>
        );
    }

}