import React from 'react';
import './index.css';

export default class FriendList extends React.Component {

    renderList() {
        let {datas} = this.props;

        // 取出json对象中所有key生成数组再遍历
        return Object.keys(datas).map( (key) => {
                let data = datas[key];
                return (
                    <dl key={key} className='friend-group'>
                        <dt>{data.title}</dt>
                    </dl>
                )
            }
        )
    }

    render() {

        return(
            <div>
                <h2>好友列表</h2>
                <div className="friend-list">
                    {this.renderList()}
                </div>
            </div>
        )
    }

}