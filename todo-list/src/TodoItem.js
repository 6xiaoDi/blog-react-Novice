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
    listVal: PropTypes.string.isRequired,
    index:  PropTypes.number,
    deleteItem: PropTypes.func,
}

TodoItem.defaultProps = {
    listVal:"未知"
}

export default TodoItem