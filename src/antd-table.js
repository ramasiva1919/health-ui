import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState,useEffect  } from 'react';
import axios from 'axios';


// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

const columns = [
  {
    start: 'Name',
    search: 'name',
    end: 'name'}]
    // render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
    // ),
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
const columnss = [
    {
      title: 'search',
      dataIndex: 'search',
      key: 'search',
    },
    {
      title: 'start',
      dataIndex: 'start',
      key: 'start',
    },
    {
      title: 'end',
      dataIndex: 'end',
      key: 'end',
    },
  ];
const AntdTable = () =>{
    const[gett,setGet]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:9000/index/table')
        .then(res=>{
          setGet(res.data.data)
        })
        .catch(err=>{
          console.log(err)
        })
      },[])
      return(
<Table columns={columnss} dataSource={gett} />)
}
export default AntdTable;