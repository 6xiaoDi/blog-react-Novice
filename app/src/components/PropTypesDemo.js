import React from 'react';
import PropTypes from 'prop-types';

export default class PropTypesDemo extends React.Component {

    static propTypes = {
        // 会把props的值传给PropTypes.number函数，对其进行数字验证。如果没满足要求则抛出一个错误。
        // max: PropTypes.number
        max: PropTypes.any.isRequired
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