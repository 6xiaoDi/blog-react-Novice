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
        this.setState({
             expanded: !this.state.expanded
        });
        // 不是立即生效的
        console.log(this.state.expanded);
    }

    render() {
        console.log('render')
        let {title, list} = this.props.data;
        let {expanded} = this.state;

        return (
            <dl className={['friend-group', expanded ? 'expanded' : ''].join(' ')}>
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