import { useState,useEffect  } from 'react';
import React from 'react';
import { DatePicker } from 'antd';
import moment from "moment";
import axios from 'axios';

const { RangePicker } = DatePicker;

 function Counter() {
  const [count, setCount] = useState(0);
  const [search, handlesearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [submit,sumiting]=useState("")
  const[get,setGet]= useState([])
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
const submited=(event)=>{
    event.preventDefault()
    let obj={
      search:search,
      start:start,
        end:end
    }
    sumiting(obj)
  
   
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
     </>
  );
};
export default Counter;
// // export default Counter;
// const App = () => {
//   return <DatePicker />;
// };

// export default App;