import React from 'react';
import Custom from "./components/custom";
import Custom02 from "./components/custom02";
import FriendList from "./components/friendList";

let datas = {
    family: {
        title: '家人',
        list: [
            {name: '爸爸'},
            {name: '妈妈'}
        ]
    },
    friend: {
        title: '朋友',
        list: [
            {name: '张三'},
            {name: '李四'},
            {name: '王五'}
        ]
    },
    customer: {
        title: '客户',
        list: [
            {name: '阿里'},
            {name: '腾讯'},
            {name: '头条'}
        ]
    }
};

function App() {
  return (
    <div className="App">
        <h1>CSDN</h1>
        <hr />
        {/*{Custom()}*/}
        {/*<Custom datas={datas} v={1} k={'kkk'}/>*/}
        {/*<Custom02 />*/}
        <FriendList datas={datas}/>
    </div>
  );
}

export default App;
