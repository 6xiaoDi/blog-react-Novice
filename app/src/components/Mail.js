import React from 'react';

import SendList from './SendList';  // 发送列表组件
import FriendList from './FriendList';  // 好友列表组件
import './mail.css';

export default class Mail extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            friend: null
        };

        this.clickUser = this.clickUser.bind(this);
    }

    clickUser(friend) {
        // 子级点击选项，触发点击事件，紧接着执行父级回调函数clickUser
        console.log(friend);
        // 更新父组件的好友列表
        this.setState({
            friend
        })
    }

    render() {
        return(
            <div>

                <div className="clear">
                    <h1>发送邮件</h1>
                    <hr/>

                    <div className="fl">
                        {/*发送接收来的好友列表点击的好友信息，进行转发*/}
                        <SendList friend={this.state.friend} />
                    </div>

                    <div className="fr">
                        {/*接收好友列表点击的好友*/}
                        {/*像事件绑定一样，把clickUser函数传给子级的onClickUser属性，子组件一点击，就触发onClickUser的函数*/}
                        <FriendList onClickUser={this.clickUser} />
                    </div>
                </div>
            </div>
        )
    }
}