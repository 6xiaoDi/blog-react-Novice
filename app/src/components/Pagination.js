import React from 'react';
import PropTypes from 'prop-types';

import {Link, withRouter} from 'react-router-dom';

class Pagination extends React.Component {

    static defaultProps = {
        pages: 1, // 总页数
        page: 1 // 当前页
    }

    // 属性验证
    static propTypes = {
        pages: PropTypes.number,
        page: PropTypes.number
    }

    render() {
        let {pages, page} = this.props;

        return (
            // 根据当前页，渲染a标签
            <div className="pagination">
                {
                    (new Array(pages)).fill('').map((v, i) => {
                        return (
                            <Link
                                key={++i}
                                // 高亮当前页
                                className={i === page ? 'active' : ''}
                                to={'/'+i}
                            >
                                {i}
                            </Link>
                        );
                    })
                }
                前往
                <input type="text" className="goto" onKeyDown={e=>{

                }} />
                页
            </div>
        );
    }

}
export default Pagination;