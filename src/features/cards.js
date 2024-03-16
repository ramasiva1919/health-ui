import { useState,useEffect  } from 'react';
import React from 'react';
import { DatePicker,Form,Input,Button } from 'antd';
import moment from "moment";
import axios from 'axios';
// import img from '../../public/images/download.jpg'
// import MyComponent from '../src/select'
const { RangePicker } = DatePicker;

function Card(props){
const [data,setData]=useState("")
const limit = 3
useEffect(()=>{
    axios.get('http://localhost:9000/index/search')
    .then(res=>{
        console.log(res.data,"resdata-------------.........................................................")
     
        const slicedData = res.data.searchData.slice(0,limit)

        setData(slicedData)
        // setTotal(Math.floor(res.data.searchData.length/limit))
        // setOriginalData(res.data.searchData)
      return res
    })
    
    .catch(err=>{
      console.log(err)
    })
  },[])


  console.log(data,"data.............................................")



return(
    <>
     <div style={{"display":"flex","margin-bottom": "23px"}}>
     
 {
  data.length>0&& data.map(obj=>( 
 <div style={{"display":"flex"}}>
 <div class="card" style={{"width": "18rem","margin-top": "30px","margin-left": "12px","background-image": "url('images/download.jpg')"}}>
 {/* <Card.Img variant="top" src='../features/images/download.jpg'/> */}
  <div class="card-body" style={{"top": "16px","margin-left": "12px"}}>
  <p style={{"background-image": "url('images/download.jpg')" }}>image</p>

    <h5 class="card-title" style={{"margin-left": "12px"}}>Card title</h5>
     <h6 class="card-subtitle mb-2 text-muted" style={{"top": "16px","margin-left": "12px"}}>{obj.name}</h6>
    <p class="card-text" style={{    "top": "16px","margin-left": "12px"}}>{obj.email}</p>
    <a href="#" class="card-link" style={{"top": "16px","margin-left": "12px"}}>{obj.phone}</a>
    <a href="#" class="card-link" style={{"top": "16px","margin-left": "12px"}}>{obj.address}</a>
  </div>
  </div>
</div>))}</div>
{/* } */}
    </>
   
)
    }

export default Card;
