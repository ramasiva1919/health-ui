import { useState,useEffect  } from 'react';
import React from 'react';
import { DatePicker,Form,Input,Button } from 'antd';
import moment from "moment";
import axios from 'axios';
import MyComponent from '../src/select'
const { RangePicker } = DatePicker;
function VisitTwoForm(props){
const [search,setSearchTwo]=useState("")
const [submit,subiting]=useState("")
const [check,SetChecked]=useState({
  Immunizationsone:false,
  Immunizationstwo:false,
  Immunizationsthree:false
})
const [serchTwo,setSearchTwoThree]=("")
const[data,setData]=useState("")
let searchThree=[]

const handleSearchTwo=(event)=>{
    console.log(event,"event.target.value")
    setSearchTwo(event.target.value) 
    setData(event.target.value)
    
}

const submited=(event)=>{
    event.preventDefault()
let obj={
    search:search
}
subiting(obj)
console.log(searchThree,"searchtreee")
axios.post('http://localhost:9000/index/dataTwo', obj)
.then(res => {
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
useEffect(()=>{
  axios.get('http://localhost:9000/index/search')
  .then(res=>{
    console.log(res.data,"resdata-------------")
   
   (setData(res.data.searchData[res.data.searchData.length-1].search))
  //  (setData(res.data.searchData[0].search))

    // console.log("res",res)
    // if(res.data.data[res.data.data.length-1].check){
    //  SetChecked(res.data.data[res.data.data.length-1].check)}
    //  if(res.data.data[res.data.data.length-1].Immunizationsradio){
    // SetImmunizationsradio(res.data.data[res.data.data.length-1].Immunizationsradio)}
    // console.log("chek,",res.data.data[res.data.data.length-1].check)
    // if(res.data.data[res.data.data.length-1].select){

    //   setVal(res.data.data[res.data.data.length-1].select)
    // }
    // console.log("select,********in par",res.data.data[res.data.data.length-1].select)
    return searchThree
  })
  
  .catch(err=>{
    console.log(err)
  })
},[])
console.log(searchThree,"data--------------")
console.log(searchThree,"searchThree")
return(
    <>
     <Form className='searchForm pd-0 mt-4'>
       {/* <div className='form-row w-100 m-0'> */}
         {/* <div className='col-9 pd-0'> */}
           <input
             type='text'
            //  className='form-control mr-0 h-100'
             id='studentId'
            //  placeholder={t('Search by Visit Type')}
              onChange={handleSearchTwo}
             name='searchWord'
              value={data}
           />
           
         {/* </div> */}
         {/* <div className='col-3 pd-0'> */}
           <button
            //  className='btn searchBtn'
             type='button'
              onClick={submited}
           >Button
             {/* {t('Search')} */}
           </button>
         {/* </div> */}
       {/* </div> */}
       <DatePicker />
       <div>
      {/* <Space direction="vertical" size={12}> */}
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
        //   value={[start ? moment(start) : "", end ? moment(end) : ""]}
        //   onChange={handleRange}
          placeholder={["YYYY-MM-DD HH:mm", "YYYY-MM-DD HH:mm"]}
        />
      {/* </Space> */}
    </div>
     </Form> 
    </>
   
)
    }

export default VisitTwoForm;
