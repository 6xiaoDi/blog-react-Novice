import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: 'helloWorld',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputVal} onChange={this.inputHandle.bind(this)}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>语文</li>
                    <li>数学</li>
                </ul>
            </Fragment>
        )
    }

    inputHandle(e) {
        // console.log(this)
        // this.state.inputVal = e.target.value
        this.setState({
            inputVal: e.target.value,
        })
    }
}

export default TodoList