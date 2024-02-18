import React from 'react';
import { useState,useEffect  } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker,Form,Input,Button } from 'antd';
import Modal from 'react-modal';
import "../src/model.css"
// Modal.setAppElement('#yourAppElement');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
function ModelApp() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [count, setCount] = useState(0);
  const [search, handlesearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [submit,sumiting]=useState("")
  const[get,setGet]= useState([""])
  const[login,setlogin]=useState([""])
  
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
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        //   className="customStyles"
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
  export default ModelApp;
//   ReactDOM.render(<ModelApp />, appElement);