import React from 'react';

export default class View extends React.Component {

    render() {

        // console.log(this.props);
        let {id} = this.props.match.params;
        console.log(id)

        return(
            <div>
                <h2>商品详情 </h2>
                <hr/>
                <p>其它一些详情信息...</p>
            </div>
        );
    }

}