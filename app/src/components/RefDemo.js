import React from 'react';

export default class UnControl extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: 'Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师Web前端工程师'
        };

        this.getHeight = this.getHeight.bind(this);
        let p = document.querySelector('p');
        console.log(p);
    }

    getHeight() {
        let p = document.querySelector('p');
        console.log(p);
    }

    render() {
        return(
            <div>
                <p style={{background: 'red', color: 'white'}}>{this.state.content}</p>
                <button onClick={this.getHeight}>按钮</button>
            </div>
        );
    }

}