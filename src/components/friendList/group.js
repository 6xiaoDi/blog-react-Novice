import React from "react";

export default class Group extends React.Component {

    toggle() {
        console.log('你点到我了吗')
    }

    render() {
        let {title, list} = this.props.data;
        return (
            <dl className='friend-group'>
                <dt onClick={this.toggle}>{title}</dt>
                {
                    list.map( item =>
                        <dd key={item.name}>
                            {item.name}
                        </dd>
                    )
                }
            </dl>
        )
    }

}