import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from '../src/visittwo';
import ModelApp from '../src/model';
import AntdModel from '../src/antd-model';
import AntdTable from '../src/antd-table';
import Project from '../src/project'
import FormTwo from '../src/form'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from '../src/registrationForm'
import Practiseonetwo from '../src/practiseonetwo'
import Login from '../src/login'
import Card from './features/cards'
import Checkbox from '../src/features/checkbox'
import Radio from '../src/features/radiobutton'
 import Curd from '../src/features/crud'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Curd></Curd>
    <Radio></Radio>
    <Checkbox></Checkbox>
    <Card></Card>
    <Login></Login>
    <Counter></Counter>
    <Practiseonetwo></Practiseonetwo>
    <FormTwo></FormTwo>
    <ModelApp></ModelApp>
    <AntdModel></AntdModel>
    <AntdTable></AntdTable>
   <Project></Project>
   <RegistrationForm></RegistrationForm>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
