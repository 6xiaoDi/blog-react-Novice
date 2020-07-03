import React from 'react';
import './dialog.css';

export default class ChildrenDemo extends React.Component {

    static defaultProps = {
        title: '这是默认标题',
        content: '这是默认的内容'
    }

    render() {
        console.log(this.props);
        return(
            <div className="dialog">
                <i className="dialog_close_btn"></i>
                <div className="dialog_header">
                    <span className="dialog_title">{this.props.title}</span>
                </div>
                <div className="dialog_content">{this.props.content}</div>
            </div>
        );
    }
}