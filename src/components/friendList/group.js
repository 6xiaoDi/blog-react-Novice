import React from "react";

export default class Group extends React.Component {

    toggle(e) {
        console.log(this);
        console.log(e.target);
    }

    render() {
        let {title, list} = this.props.data;
        return (
            <dl className='friend-group'>
                <dt onClick={this.toggle.bind(this)}>{title}</dt>
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