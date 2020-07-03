import React from 'react';

export default class UnControl extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: 'Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师'
        };

        this.getHeight = this.getHeight.bind(this);
        this.refE1 = null;
    }

    getHeight() {
        console.log(this.refEl.offsetHeight)
    }

    render() {
        return(
            <div>
                <button onClick={this.getHeight}>按钮</button>
                <p ref={el => {
                    console.log('...', el)
                    {
                        this.refEl = el;
                    }
                }} style={{background: 'red', color: 'white'}}>{this.state.content}</p>

            </div>
        );
    }

}