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
                <input type="text" value={this.state.v1}/>
            </div>
        );
    }

}