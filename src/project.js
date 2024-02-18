import React from 'react';
import { useState,useEffect  } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker,Form,Input,Button } from 'antd';
import Modal from 'react-modal';
import "../src/model.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import {  Tooltip } from 'antd';
import axios from 'axios';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import {Table, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import {  Checkbox } from 'antd';


const { Meta } = Card;

const cartItems=[{
img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
text:"be sure to use a material core version superior or equal",
price:100},{img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
text:"be sure to use a material core version superior or equal",
price:100},{img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
text:"be sure to use a material core version superior or equal",
price:100},{
  img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
text:"be sure to use a material core version superior or equal",
price:100
}
]

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    phone: 32,
    // email:ram@gmail.com,
    address: '10 Downing Street',
    email:"ram@gmail.com"
  },
  {
    key: '2',
    name: 'John',
    phone: 42,
    address: '10 Downing Street',
    email:"ram@gmail.com"

  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const items: MenuProps['items'] = [
  {
    key: 'Mike',
    label:"Mike",
  },
  {
    key: 'John',
    // label: (
    //   <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //     2nd menu item (disabled)
    //   </a>
    // ),
    label:"John",
    // icon: <SmileOutlined />,
    disabled: false,
  },
];

// import { faCartShopping } from '@fortawesome/fontawesome-svg-core/import.macro'
// Modal.setAppElement('#yourAppElement');
const customStyles = {
    content: {
        height:'747px',
        width:'1000px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  // type FieldType = {
  //   username?: string;
  //   password?: string;
  //   remember?: string;
  // };

function Project() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [count, setCount] = useState(0);
  const [search, handlesearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [submit,sumiting]=useState("")
  const[get,setGet]= useState([""])
  const[login,setlogin]=useState([""])
  const[drop,setdropDown]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[address,setAddress]=useState("")

  const[update,tableUpdate]=useState(dataSource)
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  function dropdown(event){
    console.log(event.target.value,"e.t.v")
    
  }

  const onClick: MenuProps['onClick'] = ({key}) => {
    setdropDown(key)
    let finalval=dataSource.filter(obj=>{
      if(obj.name==key){
        return obj
      }
      
    })
    console.log(finalval,"finalval")
    tableUpdate(finalval)
  };

const formDetails=(event)=>{
  console.log("event==========",event.target.name,event)

  setName(event.target.value)
  setAddress(event.target.value)
  setEmail(event.target.value)
  setPhone(event.target.value)


}
const submited=(event)=>{
  event.preventDefault()
  let obj={
    name:name,
    address:address,
      email:email,
      phone:phone,
      
  }
  console.log(obj,"obj")
  sumiting(obj)
  axios.post('http://localhost:9000/login/data', obj)
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
  console.log(name,address,email,phone,"names")
    return (
      <div>
        <button onClick={openModal}>Open custom Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        //   className="customStyles"
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
         <div style={{display: "flex",justifyContent: "end"}}> <button  onClick={closeModal}>close</button></div>
          {/* <div>I am a modal</div>
          
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
          <div>
            <div className='projectclass flexcss borderproperties'>
              <div className='flexone'>
                <h5>The shopping</h5>
                <ul className='flexcss'>
                  <ol>Home</ol>
                  <ol>All products</ol>
                </ul>
              </div>
              <div>
              {/* <i class="fa-solid fa-cart-plus"></i> */}
              <FontAwesomeIcon icon={faCartShopping} />
                
              </div>
            </div>
            <div className='secondtab'>
            <h5>The shopping Details</h5>
            </div>
            <div className='cardFlex'>
              <Row>
              {
                 
                  cartItems.map((obj)=>(
      <Col span={8}>
      <Card
              hoverable
              // style={{ width: 190 }}
              className='cardMargin'
              cover={<img alt="example" src={obj.img} />}
            >
              <Tooltip  title={obj.text}>
              <Meta title={obj.text} />
              </Tooltip>
              <text>price:{obj.price}</text>

            </Card>
      </Col>
      
      
      ))
    }
    </Row>
            
  {/* <Card
    hoverable
    style={{ width: 240 }}
    className='cardMarginOne'
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card> */}
            </div>
          </div>
          <div>
          <Dropdown  menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  <Table dataSource={update} columns={columns} />;

          </div>
          <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    onChange={formDetails}
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input name="name" />
    </Form.Item>
    <Form.Item
      label="email"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="phone"
      name="phone"
      type="phone"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Address"
      name="address"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    {/* <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item> */}

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit"  onClick={submited}>
        Submit
      </Button>
    </Form.Item>
  </Form>
        </Modal>
        
      </div>
    );
  }
  export default Project;
//   ReactDOM.render(<ModelApp />, appElement);