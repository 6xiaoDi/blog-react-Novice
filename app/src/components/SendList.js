import React from 'react';


export default class SendList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: [     // 收件人的列表 格式：{username:‘’,email:''}
                {id: 1, name: '张三', email: 'zhangsan@email.com'},
                {id: 2, name: '李四', email: 'lisi@email.com'},
                {id: 3, name: '王五', email: 'wangwu@email.com'}
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