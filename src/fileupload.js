import { useState, useEffect } from 'react';
import React from 'react';
import { DatePicker, Form, Input, Button } from 'antd';
import moment from "moment";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
function FileUpload(props) {
    const [upload, setUpload] = useState(null)

   const  onFileChange = (event) => {
    console.log(event.target.files[0],"val-=========",event.target.name)
        // Update the state
        if(event.target.name=="upload"){
          setUpload(event.target.files[0])  
        }
    
    };
   const onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();
        console.log(upload,'upload===')
 
        // Update the formData object
        formData.append(
            "file",
            upload,
            upload.name
        );
        axios.post("http://localhost:9000/index/upload", formData);
    }
console.log(upload,"upload")
return (
    
    <>
    <div>
                    <input
                        type="file"
                        name="upload"
                        onChange={onFileChange}
                    />
                    <button onClick={onFileUpload}>
                        Upload!
                    </button>
                </div>
                {/* {upload.name} */}
            
    
    </>)}
export default FileUpload;