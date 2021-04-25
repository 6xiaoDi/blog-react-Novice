import React, {Component} from 'react'
import PropTypes from 'prop-types';

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
        const {index,deleteItem} = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    listVal: PropTypes.string,
    index:  PropTypes.number,
    deleteItem: PropTypes.func,
}

export default TodoItem