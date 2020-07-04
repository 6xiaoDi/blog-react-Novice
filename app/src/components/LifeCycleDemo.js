import React from 'react';

export default class LifeCycleDemo extends React.Component {

    // 组件当中生命周期的第一个函数
    constructor(props) {
        super(props);
        console.log('组件初始化');
    }

    render() {
        console.log('组件开始渲染了');
        return (
            <div>
                <h2>生命周期演示</h2>
            </div>
        );
    }
}