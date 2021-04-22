import React, {Component} from 'react'

class TodoItem extends Component {
    constructor() {
        super()
        this.delCurrent = this.delCurrent.bind(this)
    }

    render(){
        return(
                <li
                    dangerouslySetInnerHTML={{__html: this.props.listVal}}
                    onClick={this.delCurrent}
                ></li>
        )}

    delCurrent(){
        this.props.deleteItem(this.props.index)
    }
}

export default TodoItem