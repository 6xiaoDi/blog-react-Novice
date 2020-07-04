import React from 'react';

import SendList from './SendList';  // 发送列表组件
import FriendList from './FriendList';  // 好友列表组件
import './mail.css';

export default class Mail extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

                <div className="clear">
                    <h1>发送邮件</h1>
                    <hr/>
                    <div className="fl">
                        <SendList />
                    </div>

                    <div className="fr">
                        <FriendList />
                    </div>
                </div>
            </div>
        )
    }
}