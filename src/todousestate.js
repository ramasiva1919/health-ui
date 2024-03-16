// import DefaultRenderEmpty from "antd/es/config-provider/defaultRenderEmpty";
import React, { useState } from "react";
// const temp=[{
//     list:1,
//     text:"random",
//     id:1
// },{
//     list:2,
//     text:"random world",
//     id:2
// }]

const Index = () => {
  const [list, setList] = useState([]);
  const [message, setmessage] = useState({
    text: "hello",
    id: "abcdef",
  });
  const [editing, setEditing] = useState({
    id: "",
    isediting: false,
  });
  const changemessage = (e) => {
    setmessage({
      ...message,
      text: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setmessage({
      text: "",
      id: "",
    });
  };
  const handleDelete = (id) => {
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTodos);
  };
  const changeEdit = (id) => {
    setEditing({
      ...editing,
      id: id,
      isediting: true,
    });
    let editableItems = list.find((eachitem) => eachitem.id === id);
    setmessage({
      ...message,
      text: editableItems.text,
      id: editableItems.id,
    });
  };
  const handleEdits = (e) => {
    e.preventDefault();
    let newtodos = list.map((eachItem) => {
      if (eachItem.id === editing.id) {
        return {
          text: message.text,
          id: editing.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newtodos);
    setmessage({
      text: "",
      id: "",
    });
    setEditing({
      id: "",
      isediting: false,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter message"
          value={message.text}
          onChange={changemessage}
        ></input>
        {editing.isediting ? (
          <button onClick={handleEdits}>edit</button>
        ) : (
          <button onClick={handlesubmit}>Add</button>
        )}
      </form>
      {list.length === 0 && <h1>There is no data</h1>}
      <ul>
        {list.map((eachitem) => {
          const { text, id } = eachitem;
          return (
            <li key={id}>
              {" "}
              <span>{text}</span>
              <button onClick={() => changeEdit(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;
