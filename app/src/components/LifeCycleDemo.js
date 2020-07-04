import React from 'react';

export default class LifeCycleDemo extends React.Component {

    // 组件当中生命周期的第一个函数
    constructor(props) {
        super(props);

        this.state = {
            a: 1
        };

        console.log('组件初始化');
    }

    // static getDerivedStateFromProps(props, state) {
    //     // 从props中获取派生的state
    //     console.log('getDerivedStateFromProps', props, state);
    // }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // nextProps nextState 均代表最新的
    shouldComponentUpdate(nextProps, nextState) {
        // return this.state.value !== nextState.value;

        console.log(this.props, nextProps);
        console.log(this.state, nextState);
        return (this.props.val !== nextProps.val || this.state.a !== nextState.a);
    }

    render() {
        console.log('组件开始渲染了');
        return (
            <div>
                <h2>生命周期演示</h2>
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>子组件的按钮</button>
                <hr/>
                <p>state：{this.state.a}</p>
                <p>props: {this.props.val}</p>
            </div>
        );
    }
}