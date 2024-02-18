import { useState,useEffect  } from 'react';
import React from 'react';
import { DatePicker,Form,Input,Button } from 'antd';
import moment from "moment";
import axios from 'axios';
import MyComponent from '../src/select'
const { RangePicker } = DatePicker;

 function Counter(props) {
  const [count, setCount] = useState(0);
  const [search, handlesearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [submit,sumiting]=useState("")
  const[get,setGet]= useState([""])
  const[login,setlogin]=useState([""])
  const[select,setVal]=useState({})
  const [check,SetChecked]=useState({
    Immunizationsone:false,
    Immunizationstwo:false,
    Immunizationsthree:false
  })
  const [Immunizationsradio,SetImmunizationsradio]=useState(false
  
    
  )

  useEffect(()=>{
      axios.get('http://localhost:9000/index/table')
      .then(res=>{
        console.log("res",res)
        if(res.data.data[res.data.data.length-1].check){
         SetChecked(res.data.data[res.data.data.length-1].check)}
         if(res.data.data[res.data.data.length-1].Immunizationsradio){
        SetImmunizationsradio(res.data.data[res.data.data.length-1].Immunizationsradio)}
        console.log("chek,",res.data.data[res.data.data.length-1].check)
        if(res.data.data[res.data.data.length-1].select){

          setVal(res.data.data[res.data.data.length-1].select)
        }
        console.log("select,********in par",res.data.data[res.data.data.length-1].select)
      })
      
      .catch(err=>{
        console.log(err)
      })
    },[])
    const handleRange = (datetimeRangeUTC, datetimeRangeLocal) => {
    setStart(datetimeRangeUTC[0]);// important
    setEnd(datetimeRangeUTC[1]);// important
    console.log(datetimeRangeUTC[0]);
    console.log(datetimeRangeUTC[1]);
  };
useEffect(()=>{
  axios.get('https://dummyjson.com/products/1')
  .then(res=>{
    console.log(res,"res")
    setGet(res)
  })
  .catch(err=>{
    console.log(err)
  })
},[])


useEffect(()=>{
console.log(sumiting,"submiting")
},[submit])
useEffect(()=>{
console.log(search,"search")
},[search])
  function handleClick() {
    setCount(count + 1);
  }
const handleSearch=(event)=>{
    
    handlesearch(event.target.value) 
    
}
const handlechecked=(event)=>{
 
  SetChecked({...check,[event.target.name]:event.target.checked})
}
const handleradio=(event)=>{
 
  SetImmunizationsradio(event.target.value)
}
const submited=(event)=>{
  console.log("submiteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    event.preventDefault()
    let obj={
      search:search,
      start:start,
        end:end,
        check:check,
        Immunizationsradio:Immunizationsradio,
        select:select
    }
    sumiting(obj)
  
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
const onFinish=(e)=>{
  setlogin(e.target.value) }
function sendval(val){
  setVal(val)
}


  return (
    <>
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
       <form className='searchForm pd-0 mt-4'>
       {/* <div className='form-row w-100 m-0'> */}
         {/* <div className='col-9 pd-0'> */}
           <input
             type='text'
            //  className='form-control mr-0 h-100'
             id='studentId'
            //  placeholder={t('Search by Visit Type')}
              onChange={handleSearch}
             name='searchWord'
             value={search}
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
          value={[start ? moment(start) : "", end ? moment(end) : ""]}
          onChange={handleRange}
          placeholder={["YYYY-MM-DD HH:mm", "YYYY-MM-DD HH:mm"]}
        />
      {/* </Space> */}
    </div>
     </form>
     <form onFinish={onFinish}>
      <Form.Item label="user name" name="username">
        <Input placeholder="user name" required></Input>
      </Form.Item>
      <Form.Item label="password" name="password">
        <Input placeholder="password" required></Input>
      </Form.Item>
      <Form.Item >
        <Button block type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
      <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='radio'
                            // defaultValue
                            id='parentcontactlist'
                            name='Immunizationsradio'
                            onChange={handleradio}
                            checked={Immunizationsradio==="Immunizationsradioone"}
                            value="Immunizationsradioone"

                            // onChange={SetChecked((e)=>e.target.checked)}
                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationsone</strong>
                          </label>
                        </div>
                        <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='radio'
                            // defaultValue
                            id='parentcontactlist'
                            name='Immunizationsradio'
                            // onChange={this.handleChange}
                            onChange={handleradio}
                            checked={Immunizationsradio==="Immunizationsradiotwo"}
                            value="Immunizationsradiotwo"


                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationstwo</strong>
                          </label>
                        </div>
                        <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='radio'
                            // defaultValue
                            id='parentcontactlist'
                            name='Immunizationsradio'
                            // onChange={this.handleChange}
                            // onChange={SetChecked((e)=>e.target.checked)}
                            onChange={handleradio}

                            checked={Immunizationsradio==="Immunizationsradiothree"}
                            value="Immunizationsradiothree"

                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationsthree</strong>
                          </label>
                        </div>
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
                        <MyComponent select={select} sendval={sendval}></MyComponent> 
     </form>
     </>
  );
};
export default Counter;
// // export default Counter;
// const App = () => {
//   return <DatePicker />;
// };

// export default App;