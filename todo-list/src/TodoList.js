import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
import Test from "./Test";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: ["数学","英语","语文"]
        }

        this.delTask = this.delTask.bind(this)
        this.submitTask = this.submitTask.bind(this)
        this.inputHandle = this.inputHandle.bind(this)
        this.getTodoItem = this.getTodoItem.bind(this)
    }

    render() {
        console.log("TodoList----------render()")
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputTask">输入任务：</label>
                    <input
                        id="inputTask"
                        type="text"
                        className="input"
                        value={this.state.inputVal}
                        onChange={this.inputHandle}
                    />
                    <button onClick={this.submitTask}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
                <Test content={this.state.inputVal}/>
            </Fragment>
        )
    }

    inputHandle(e) {
        // this.setState({
        //     inputVal: e.target.value,
        // })
        this.setState(() => ({
            inputVal: e.target.value
        }))
    }

    submitTask() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputVal],
        //     inputVal: "",
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputVal],
            inputVal: "",
        }))
    }

    // delTask(index) {
    //     const dest = [...this.state.list]
    //     dest.splice(index, 1)
    //     this.setState({
    //         list: dest,
    //     })
    // }

    // delTask(index) {
    //     // this.setState({
    //     //     list: this.state.list.filter((e, i) => index !== i),
    //     // })
    //     this.setState((prevState) => ({
    //         list: prevState.list.filter((e, i) => index !== i),
    //     }))
    // }

    delTask(index) {
        this.setState(() => {
            const dest = [...this.state.list]
            dest.splice(index, 1)
            return ({
                list: dest,
            })
        })
    }

    getTodoItem() {
        return (
            this.state.list.map((val, index) => {
                return (
                    <TodoItem
                        // listVal={123}
                        listVal={val}
                        deleteItem={this.delTask}
                        index={index}
                        key={index}
                    />
                )

            })
        )
    }
}

export default TodoList