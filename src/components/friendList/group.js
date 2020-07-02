import React from "react";

export default class Group extends React.Component {
    render() {
        let {title, list} = this.props.data;
        return (
            <dl className='friend-group'>
                <dt onClick={() => {console.log("你点到我了！")}}>{title}</dt>
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