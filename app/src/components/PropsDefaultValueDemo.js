import React from 'react';

export default class PropsDefaultValueDemo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let max = this.props.max || 1;
        return(
            <div>
                <h2>值 - {max}</h2>
            </div>
        );
    }

}