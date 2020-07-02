import React from "react";

export default class Group extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false  // 展开收缩状态，默认收缩
        }
        // 一般都在构造函数中绑定好this
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.state.expanded = !this.state.expanded;
        console.log(this.state.expanded);
    }

    render() {
        let {title, list} = this.props.data;
        let {expanded} = this.state;

        return (
            <dl className={['friend-group', expanded ? 'expanded' : ''].join(' ')}>
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