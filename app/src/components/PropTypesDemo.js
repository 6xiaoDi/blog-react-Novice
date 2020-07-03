import React from 'react';
import PropTypes from 'prop-types';

export default class PropTypesDemo extends React.Component {

    static propTypes = {

        // props对象 propName:props名称 componentName 组件名称
        max(props, propName, componentName) {
            console.log('....');
            let v = props[propName]; // 取值方式
            console.log(v);
            if (v < 10 || v > 100) {
                throw new RangeError('max的值必须在10-100之间');
            }
        }
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