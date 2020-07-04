import React from 'react';

// ErrorBoundary 错误边界
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }; // 默认没错
    }

    // 该方法用来获取子组件抛出的错误，自动被调用
    static getDerivedStateFromError(error) {
        return { hasError: true };  // 返回的对象会更新state，类似调用this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <div>出错了</div>;
        }
        return this.props.children;
    }
}