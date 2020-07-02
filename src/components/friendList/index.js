import React from 'react';
import './index.css';
import Group from "./group";

export default class FriendList extends React.Component {

    render() {
        //解构数据
        let {datas} = this.props;
        console.log(datas);

        return(
            <div>
                <h2>好友列表</h2>
                <div className="friend-list">
                    {Object.keys(datas).map( (key) => {
                            let group = datas[key]; // 带了一个title，和list 的对象
                            return <Group key={key} data={group}></Group>
                        }
                    )}
                </div>
            </div>
        )
    }

}