import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // inputVal: 'helloWorld',
            inputVal: '',
            list: ["数学","英语","语文"]
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputVal} onChange={this.inputHandle.bind(this)}/>
                    <button onClick={this.submitTask.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((val, index) => {
                            return <li key={index}>{val}</li>
                        })
                    }
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

    submitTask() {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: "",
        })
    }
}

export default TodoList