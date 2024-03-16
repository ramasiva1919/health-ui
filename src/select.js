import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = (props) => {

const [select,setSelect]=useState({})
console.log("props=====",select.select);
console.log(props,"props")
  useEffect(()=>{
    console.log(select,props,"select")
    setSelect(props.select)
  },[select])

const onChanges=(val)=>{
    setSelect(val)
    // props.sendval(val)

}
//  function sendval(){
// }
 return <Select options={options} onChange={onChanges} value={select}  />
}
export default MyComponent