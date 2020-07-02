import React from 'react';
import './index.css';

export default class FriendList extends React.Component {
    render() {
        return(
            <div>
                <h2>好友列表</h2>
                <div className="friend-list">
                    <div className="friend-group">
                        <dt>家人</dt>
                        <dd>爸爸</dd>
                        <dd>妈妈</dd>
                    </div>
                    <div className="friend-group">
                        <dt>朋友</dt>
                        <dd>张三</dd>
                        <dd>李四</dd>
                        <dd>王五</dd>
                    </div>
                    <div className="friend-group">
                        <dt>客户</dt>
                        <dd>阿里</dd>
                        <dd>腾讯</dd>
                        <dd>头条</dd>
                    </div>
                </div>
            </div>
        )
    }

}