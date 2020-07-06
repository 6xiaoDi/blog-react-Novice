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
        // let {pages, page} = this.props;
        let {pages, page, history} = this.props;

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
                                to={'/?page='+i}
                            >
                                {i}
                            </Link>
                        );
                    })
                }
                前往
                {/*完善分页的跳转某页的功能*/}
                <input type="text" className="goto" onKeyDown={e=>{
                    //  输入跳转页
                    if (e.target.value !== '' && e.keyCode == 13) {
                        // 跳转页面：刷新url
                        history.push('/?page=' + e.target.value);
                    }
                }} />
                页
            </div>
        );
    }

}
export default withRouter(Pagination);