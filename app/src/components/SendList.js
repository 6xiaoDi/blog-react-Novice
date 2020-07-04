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
                        收件人：<input type="text" />
                    </div>
                </div>

            </div>
        )
    }

}