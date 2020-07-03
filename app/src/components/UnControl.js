import React from 'react';

export default class UnControl extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                我的值是：{this.props.value}
            </div>
        );
    }

}