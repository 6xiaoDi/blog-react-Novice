import React from "react";
import {Link} from "react-router-dom";

export default class Item extends React.Component{

    render() {
        let {item} = this.props;

        return(
            <li>
                <span>
                    <a href="">{item.name}</a>
                </span>
                {/*保留两位小数*/}
                <span>￥ {(item.price / 100).toFixed(2)}</span>
            </li>
        );
    }

}