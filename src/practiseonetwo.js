import { useState, useEffect } from 'react';
import React from 'react';
import { DatePicker, Form, Input, Button } from 'antd';
import moment from "moment";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import FileUpload from './fileupload';
// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
 import Index from "../src/todousestate"
import MyComponent from './select'
import { Toast } from 'bootstrap';
// import FileUpload from './fileupload';
const { RangePicker } = DatePicker;
const limit =3;
const uploader = Uploader({
  apiKey: "free" // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };

function Practiseonetwo(props) {
     const [name, setName] = useState("")
   const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddesss] = useState("")
    const [paginationData, setPaginationData] = useState([]);
    const [pageNumber,setPageNumber]=useState(1);
    const [total,setTotal] = useState(0)
     const[data,setData]= useState([])
     const[originalData,setOriginalData]= useState([])
     const [editData,setEditData]= useState({})
     const [searchItem, setSearchItem] = useState('')

     const handleInputChange = (e) => { 
       const searchTerm = e.target.value;
       setSearchItem(searchTerm)
     }
    let searchThree = []
    const handleSearchTwo = (event) => {
        if(event.target.name=="name"){
           setName(event.target.value) 
   
        } 
        console.log(name,"string------------------")
   
        if(event.target.name=="email"){
           setEmail(event.target.value)
   
        } 
        if(event.target.name=="phone"){
           setPhone(event.target.value) 
   
        } 
        if(event.target.name=="address"){
           setAddesss(event.target.value) 
   
        } 
           console.log(name,email,phone,address, "event.target.value")
   
   
   
       }
       useEffect(()=>{
        axios.get('http://localhost:9000/index/search')
        .then(res=>{
            console.log(res.data,"resdata-------------")
         
            const slicedData = res.data.searchData.slice(0,limit)

            setData(slicedData)
            setTotal(Math.floor(res.data.searchData.length/limit))
            setOriginalData(res.data.searchData)
          return res
        })
        
        .catch(err=>{
          console.log(err)
        })
      },[])
      let edit = (obj)=>{
        console.log(obj,"obj")

        axios.get(`http://localhost:9000/index/searchOne?name=${obj.name}`)
        .then(res=>{
            console.log(res.data,"data----------------------------")

            // const [name, setName] = useState("")
            // const [email, setEmail] = useState("")
            //  const [phone, setPhone] = useState("")
            //  const [address, setAddesss] = useState("")
            setName(res.data.searchData.name)
            setEmail(res.data.searchData.email)
            setPhone(res.data.searchData.phone)
            setAddesss(res.data.searchData.address)

            // setData(res.data.searchData)
       
          return res
        })
        
        .catch(err=>{
          console.log(err)

        })
        
        // setData(res.data.searchData)
        

       }
console.log(editData,"editdata")
//practise one two===========================================================================================
const deleteUser=(id)=>{
  console.log("idd",id)
  const obj = {_id:id}
  axios.post(`http://localhost:9000/index/userDelete`,obj)
  .then(res=>{
      console.log(res.data,"data-------------")
      // const [name, setName] = useState("")
      // const [email, setEmail] = useState("")
      //  const [phone, setPhone] = useState("")
      //  const [address, setAddesss] = useState("")
      // setName(res.data.searchData.name)
      // setEmail(res.data.searchData.email)
      // setPhone(res.data.searchData.phone)
      // setAddesss(res.data.searchData.address)

      // setData(res.data.searchData)
 
    return res
  })
  .catch(err=>{
    console.log(err)

  })
  

}
const submited=(event)=>{
    event.preventDefault()
let obj={
    name:name,
    phone:phone,
    email:email,
    address:address
}
// setSubiting(obj)
console.log(searchThree,"searchtreee")
axios.post('http://localhost:9000/index/user', obj)
.then(res => {
    console.log(res,"res")
 let responseData = res
 console.log(responseData,"responsedata")
  //  if (responseData) {
  //    const user = responseData
    
  //  } else {
  //    alert('Something went wrong while creating account')
  //  }
})

console.log(obj,"obj")
}

      console.log(data,"data")
    return (
        <>
        {/* //practise one two */}
            <Form className='searchForm pd-0 mt-4'>
                {/* <div className='form-row w-100 m-0'> */}
                {/* <div className='col-9 pd-0'> */}
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        //  className='form-control mr-0 h-100'
                        id='name'
                        //  placeholder={t('Search by Visit Type')}
                        onChange={handleSearchTwo}
                        name='name'
                      value={name}
                    />
                </div>
                <div>
                    <label>Email</label>

                    <input
                        type='text'
                        //  className='form-control mr-0 h-100'
                        id='email'
                        //  placeholder={t('Search by Visit Type')}
                        onChange={handleSearchTwo}
                        name='email'
                   value={email}
                    /></div>
                <div>
                    <label>Address</label>

                    <input
                        type='text'
                        //  className='form-control mr-0 h-100'
                        id='address'
                        //  placeholder={t('Search by Visit Type')}
                        onChange={handleSearchTwo}
                        name='address'
                       value={address}
                    /></div><div>
                    <label>PhoneNumber</label>
                    <input
                        type='number'
                        //  className='form-control mr-0 h-100'
                        id='number'
                        //  placeholder={t('Search by Visit Type')}
                        onChange={handleSearchTwo}
                        name='phone'
                      value={phone}
                    /></div>

                {/* </div> */}
                {/* <div className='col-3 pd-0'> */}
                <div>

                    <button
                        //  className='btn searchBtn'
                        type='button'
                      onClick={submited}
                    >Button
                        {/* {t('Search')} */}
                    </button>
                    {/* </div> */}
                    {/* </div> */}

                </div>
            </Form>
            <Index></Index>
            <div>
            <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Address</th>
    <th>Actions</th>

  </tr>
    {data.length>0&& data.map(obj=>(
        <tr>
         <td>{obj.name}</td>
         <td>{obj.email}</td>
         <td>{obj.phone}</td>
         <td>{obj.address}</td>
         <button onClick={()=>edit(obj)}>Edit</button>
         <button onClick={()=>deleteUser(obj._id)}  >Delete</button>
         </tr>

    ))
    
    }
    
 {/* <div className="App">
      <h2 className="mt-5 px-4">React Bootstrap pagination example</h2>

      <ul className="list-group p-4">
        {state.data.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              <span className="font-weight-bold pr-2">{item.id}.</span>{" "}
              {item.title}
            </li>
          );
        })}
      </ul>

      <Pagination className="px-4">
        {state.data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === state.activePage}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div> */}
  {/* <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr> */}
 {/* if(data){  */}

{/* } */}

 
</table>

            </div>
        </>

    )
}

export default Practiseonetwo;