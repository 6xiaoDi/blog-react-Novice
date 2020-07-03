import React from 'react';

export default class FormDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            v1: 1
        };

    }

    render() {
        return(
            <div>
                <h2>表单</h2>
                <hr/>
                <input type="text" value="1"/>
                <button onClick={ () => {
                    this.setState({
                        v1: this.state.v1 + 1
                    })
                }}>按钮</button>
            </div>
        );
    }

}