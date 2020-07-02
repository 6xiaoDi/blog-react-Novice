import React from 'react';
import './index.css';
import Group from "./group";

export default class FriendList extends React.Component {

    constructor(props) {
        super(props);

        // 状态
        let len = Object.keys(this.props.datas).length;
        this.state = {
            expanded: new Array(len).fill(false)   // 默认三个导航都是收缩状态
        };
    }

    render() {
        //解构数据
        let {datas} = this.props;
        let {expanded} = this.state;

        return(
            <div>
                <h2>好友列表</h2>
                <div className="friend-list">
                    {Object.keys(datas).map( (key, index) => {
                            let group = datas[key]; // 带了一个title，和list 的对象
                            return <Group key={key} expanded={expanded[index]} data={group}></Group>
                        }
                    )}
                </div>
            </div>
        )
    }

}