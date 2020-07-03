import React from 'react';

export default class Drag extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {

        // 被拖拽的元素
        let el = this.props.children;
        console.log(el);// 虚拟dom对象，不是原生js对象

        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}