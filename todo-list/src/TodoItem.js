import React, {Component} from 'react'

class TodoItem extends Component {
    constructor() {
        super()
        this.delCurrent = this.delCurrent.bind(this)
    }

    render(){
        const {listVal} = this.props
        return(
                <li
                    dangerouslySetInnerHTML={{__html: listVal}}
                    onClick={this.delCurrent}
                ></li>
        )}

    delCurrent(){
        const {index} = this.props
        this.props.deleteItem(index)
    }
}

export default TodoItem