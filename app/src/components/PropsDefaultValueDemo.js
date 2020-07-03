import React from 'react';

export default class PropsDefaultValueDemo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>值 - {this.props.max}</h2>
            </div>
        );
    }

}