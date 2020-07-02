import React from 'react';
import './index.css';

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
                            let data = datas[key];
                            let {list} = data;
                            return (
                                <dl key={key} className='friend-group'>
                                    <dt>{data.title}</dt>
                                    {
                                        list.map( item => {
                                                return <dd>{item.name}</dd>
                                            }
                                        )
                                    }
                                </dl>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }

}