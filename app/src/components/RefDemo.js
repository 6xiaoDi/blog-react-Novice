import React from 'react';

export default class UnControl extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: 'Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师'
        };

        this.getHeight = this.getHeight.bind(this);
        this.refE1 = null;
        // 自动生成帮助赋值节点的函数，但是并不是直接就是这个元素标签，得到是一个对象，对象内的current才是真正的标签对象
        this.refEl2 = React.createRef();
    }

    getHeight() {
        console.log(this.refEl2);
        console.log(this.refEl2.current.offsetHeight);
    }

    render() {
        return(
            <div>
                <button onClick={this.getHeight}>按钮</button>
                {/*<p ref={el => {*/}
                {/*    console.log('...', el)*/}
                {/*    {*/}
                {/*        this.refEl = el;*/}
                {/*    }*/}
                {/*}} style={{background: 'red', color: 'white'}}>{this.state.content}</p>*/}
                <p ref={this.refEl2} style={{background: 'red', color: 'white'}}>{this.state.content}</p>
            </div>
        );
    }

}