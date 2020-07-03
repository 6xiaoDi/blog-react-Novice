import React from 'react';

export default class PropsDefaultValueDemo extends React.Component {

    /**
     * 给当前组件的props设置默认值
     */
    static defaultProps = {
        max: 10
    };

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