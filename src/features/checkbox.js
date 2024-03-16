import { useState,useEffect  } from 'react';
import React from 'react';
import { DatePicker,Form,Input,Button } from 'antd';
import moment from "moment";
import axios from 'axios';
// import img from '../../public/images/download.jpg'
// import MyComponent from '../src/select'
const { RangePicker } = DatePicker;

function Checkbox(props){
    const [check,SetChecked]=useState({
        Immunizationsone:false,
        Immunizationstwo:false,
        Immunizationsthree:false
      })


    const handlechecked=(event)=>{
 
        SetChecked({...check,[event.target.name]:event.target.checked})
      }

      useEffect(()=>{
        console.log("useeffect-----------------------------------------------------------------");
        axios.get('http://localhost:9000/index/table')
        .then(res=>{
          console.log("res",res)
          if(res.data.data[res.data.data.length-1].check){
           SetChecked(res.data.data[res.data.data.length-1].check)}
        //    if(res.data.data[res.data.data.length-1].Immunizationsradio){
        //   SetImmunizationsradio(res.data.data[res.data.data.length-1].Immunizationsradio)}
        //   console.log("chek,",res.data.data[res.data.data.length-1].check)
        //   if(res.data.data[res.data.data.length-1].select){
  
        //     setVal(res.data.data[res.data.data.length-1].select)
        //   }
          console.log("select,********----------------------------------------in par",res.data.data[res.data.data.length-1].select)
        })
        
        .catch(err=>{
          console.log(err)
        })
      },[])
    //   const handleRange = (datetimeRangeUTC, datetimeRangeLocal) => {
    //   setStart(datetimeRangeUTC[0]);// important
    //   setEnd(datetimeRangeUTC[1]);// important
    //   console.log(datetimeRangeUTC[0]);
    //   console.log(datetimeRangeUTC[1]);
    // };


    const submited=(event)=>{
        console.log("submiteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
          event.preventDefault()
          let obj={
           
              check:check,
              
          }
        
        
          // axios.get('http://localhost:9000/index/doccument')
          // .then(res => {
          //  let  getres = res
          //  console.log(getres,"responsedata")
          //   //  if (responseData) {
          //   //    const user = responseData
              
          //   //  } else {
          //   //    alert('Something went wrong while creating account')
          //   //  }
          // })
          axios.post('http://localhost:9000/index/data', obj)
          .then(res => {
           let  responseData = res
           console.log(responseData,"responsedata")
            //  if (responseData) {
            //    const user = responseData
              
            //  } else {
            //    alert('Something went wrong while creating account')
            //  }
          })
          console.log(obj,"obj")
      }

return(
    <>
     <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='checkbox'
                            // defaultValue
                            id='parentcontactlist'
                            name='Immunizationsone'
                            onChange={handlechecked}
                             checked={check.Immunizationsone}

                            // onChange={SetChecked((e)=>e.target.checked)}
                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationsone</strong>
                          </label>
                        </div>
                        <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='checkbox'
                            // defaultValue
                            id='parentcontactlist'
                            name='Immunizationstwo'
                            // onChange={this.handleChange}
                            onChange={handlechecked}
                            checked={check.Immunizationstwo}

                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationstwo</strong>
                          </label>
                        </div>
                        <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='checkbox'
                            // defaultValue
                            id='parentcontactlist'
                            name='Immunizationsthree'
                            // onChange={this.handleChange}
                            // onChange={SetChecked((e)=>e.target.checked)}
                            onChange={handlechecked}

                            checked={check.Immunizationsthree}

                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationsthree</strong>
                          </label>
                        </div>
                        <button
            //  className='btn searchBtn'
             type='button'
              onClick={submited}
           >Button
             {/* {t('Search')} */}
           </button>
    </>
   
)
    }

export default Checkbox;
