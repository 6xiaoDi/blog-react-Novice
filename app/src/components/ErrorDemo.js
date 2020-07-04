import React from 'react';

export default class ErrorDemo extends React.Component {

    // 组件有的时候在执行过程中，可能会不可预料地产生一些错误。给用户展示不太好的体验！
    constructor(props) {
        super(props);

        console.lo('...');
    }

    render() {
        return (
            <div>
                这是正常的页面
            </div>
        );
    }

}