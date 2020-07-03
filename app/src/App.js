import React from 'react';
import FormDemo from "./components/FormDemo";
import UnControl from "./components/UnControl";
import RefDemo from "./components/RefDemo";
import PropsDefaultValueDemo from "./components/PropsDefaultValueDemo";
import PropTypesDemo from "./components/PropTypesDemo";
import ChildrenDemo from "./components/ChildrenDemo";
import Drag from "./components/Drag";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            v1: 1
        }

        this.moveElemnt = this.moveElemnt.bind(this);
    }

    moveElemnt(el) {
        let startPos = {} // 1. 鼠标点击的位置

        let boxPos={} // 2. 元素的初始位置



        el.addEventListener("mousedown", (e)=>{
            // 保存
            // 初始鼠标位置
            startPos.x = e.clientX;
            startPos.y = e.clientY;

            // 元素的初始位置
            boxPos.x = parseFloat(getComputedStyle(el).left);
            boxPos.y = parseFloat(getComputedStyle(el).top);

            document.addEventListener("mousemove", drag);

            let i = 1;

            el.addEventListener("mouseup", ()=>{
                console.log(i++);
                document.removeEventListener("mousemove", drag);
            },{
                // 只绑定一次事件
                once:true
            });
        });


        function drag(e){
            let nowPos = {
                x : e.clientX,
                y : e.clientY
            }

            let dis = {
                x : nowPos.x - startPos.x,
                y : nowPos.y - startPos.y
            }

            let newBoxPos = {
                left : boxPos.x + dis.x,
                top : boxPos.y + dis.y
            }

            // 限制左侧
            if (newBoxPos.left < 0){
                newBoxPos.left = 0;
            }

            // 限制右侧
            let maxLeft = document.documentElement.clientWidth - el.offsetWidth;
            if (newBoxPos.left > maxLeft){
                newBoxPos.left = maxLeft;
            }

            // 限制上侧
            if (newBoxPos.top < 0){
                newBoxPos.top = 0;
            }

            // 限制下侧
            let maxTop = document.documentElement.clientHeight;
            if (newBoxPos.top > maxTop) {
                newBoxPos.top = maxTop;
            }

            el.style.top = newBoxPos.top + 'px';
            el.style.left = newBoxPos.left + 'px';
        }
    }

    render() {
        return (
            <div className="App">

                {/*<FormDemo />*/}

                {/*<hr/>*/}

                {/*<UnControl value={this.state.v1} />*/}

                {/*<RefDemo />*/}

                {/*<PropsDefaultValueDemo />*/}
                {/*<PropsDefaultValueDemo max={1000} />*/}
                {/*<PropTypesDemo max={19} />*/}
                {/*<PropTypesDemo max={9} />*/}
                {/*<PropTypesDemo max={'csdn'} />*/}
                {/*<PropTypesDemo />*/}
                {/*<ChildrenDemo title={'CSDN'}>*/}
                {/*    <form>*/}
                {/*        <p>*/}
                {/*            用户名：<input type="text"/>*/}
                {/*        </p>*/}
                {/*    </form>*/}
                {/*</ChildrenDemo>*/}
                {/*装饰者*/}
                <Drag>
                    <div ref={el => {
                        console.log(el); // 解析过后的元素
                        this.moveElemnt(el);
                    }} style={{
                        width: '100px',
                        height: '100px',
                        position: 'absolute',
                        background: 'red',
                    }}></div>
                </Drag>
            </div>
        )
    }

}

export default App;
