import React from "react";

export default class Group extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        // 子组件内部不允许直接修改父级传入的props
        // this.props.expanded = !this.props.expanded;
        if ('function' === typeof this.props.onChange) {
            // 这个函数this指向的是父级的组件this
            this.props.onChange(this.props.index, !this.props.expanded);
        }
    }

    render() {
        let {expanded, data: {title, list}} = this.props;

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