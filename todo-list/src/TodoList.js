import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text"/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>语文</li>
                    <li>数学</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList