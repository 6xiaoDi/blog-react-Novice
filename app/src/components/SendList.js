import React from 'react';


export default class SendList extends React.Component{

    constructor(props) {
        super(props);

        /**
         * 在当前这个组件的内部会维护一个收件人的列表
         * 我们可以通过这个组件的input输入框来新增收件人
         *
         * 当前这个组件的 users 会根据传入的 props 来新增数据
         * 当前组件的 state 依赖了 props 的数据进行更新
         */

        this.state = {
            users: [     // 收件人的列表 格式：{username:‘’,email:''}
                // {id: 1, name: '张三', email: 'zhangsan@email.com'},
                // {id: 2, name: '李四', email: 'lisi@email.com'},
                // {id: 3, name: '王五', email: 'wangwu@email.com'}
            ]
        };

        this.addUser = this.addUser.bind(this);
    }

    addUser(e) {
        // enter
        if (e.keyCode === 13) {
            this.setState({
                // users: this.state.users.push() 经典错误，push返回的不是数组，而是数组长度。
                // ...this.state.users解构
                users: [...this.state.users, {email: e.target.value}]
            });
        }
    }

    render() {
        return(
            <div>

                <div className="multi-input">
                    {
                        this.state.users.map(user => (
                            <div key={user.email}>{user.name} {user.email};</div>
                        ))
                    }
                    <div>
                        收件人：<input type="text" onKeyDown={this.addUser} />
                    </div>
                </div>

            </div>
        )
    }

}