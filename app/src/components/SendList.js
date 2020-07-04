import React from 'react';


export default class SendList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: [     // 收件人的列表 格式：{username:‘’,email:''}
            ]
        };

        this.addUser = this.addUser.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        if (props.friend) {

            return {
                // getNewUsers必须设置为静态方法，因为静态方法只能调用静态方法，不能使用this
                users: SendList.getNewUsers(props.friend, state.users)
            };
        }
        return null;
    }

    // 如何拿到input里的数据？1、事件源e.target 2、通过ref 3、通过受控组件
    addUser(e) {
        // enter
        if (e.keyCode === 13) {
            this.setState({
                // users: this.state.users.push() 经典错误，push返回的不是数组，而是数组长度。
                // ...this.state.users解构
                users: SendList.getNewUsers({email: e.target.value}, this.state.users)
            });
            // 清空提交后的值，下次则再重新输入E-mail
            e.target.value = '';
        }
    }

    // 看用户是否存在，如果存在就不再添加了
    static getNewUsers(user, users) {
        if ( users.find(u => u.email === user.email) ) {
            return [...users];
        } else {
            return [...users, user];
        }
    }

    render() {
        // console.log(this.state.users)
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