import React from 'react';


export default class FriendList extends React.Component{

    constructor(...props) {
        super(...props);

        this.state = {
            friends: [
                {id: 1, name: '张三', email: 'zhangsan@email.com'},
                {id: 2, name: '李四', email: 'lisi@email.com'},
                {id: 3, name: '王五', email: 'wangwu@email.com'}
            ]
        };

        this.clickUser = this.clickUser.bind(this);

    }

    clickUser(friend) {
        // 判断父级有没有传来一个回调函数
        if ('function' === typeof this.props.onClickUser) {
            this.props.onClickUser(friend);
        }
    }

    render() {
        return(
            <div>
                <ul className="box fl">
                    {
                        // 注意不要 onClick={this.clickUser(friend)} ,这样设置不用点击，默认就调用了，传参一般需要放入嵌套的函数里
                        this.state.friends.map(friend => (
                            <li key={friend.id} onClick={() => {
                                this.clickUser(friend)
                            }}>
                                {friend.name}
                            </li>
                        ))
                    }
                </ul>

            </div>
        )
    }

}