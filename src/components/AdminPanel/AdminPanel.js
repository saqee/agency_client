import React, { useState } from 'react';
import Axios from 'axios'
const AdminPanel = () => {
    const [info,setinfo]=useState({})
    const [file,setfile]=useState(null)
    const handleChange=(e)=>{
       let newinfo={...info}
       newinfo[e.target.name]=e.target.value
       setinfo(newinfo)
    }
    const handlefileChange=(e)=>{
        const newfile=e.target.files[0]
        setfile(newfile)
    }
    const addCompanyService=()=>{
        
        
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)
        
        fetch('https://murmuring-wave-78511.herokuapp.com/companyservice', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    
        

    }

    return (
        <div>
        <form onSubmit={addCompanyService}>
          <h2>Add Company Services</h2>
        <div class="form-group">
         <input type="text" class="form-control" name="name" placeholder="your name" onChange={handleChange}
         
         />
        </div>
       
         <div class="form-group">
         <textarea rows="5" class="form-control" name="description" placeholder="write down your opinion" onChange={handleChange}
         />
         </div>
         <div class="form-group">
         <input type="file" class="form-control" name="image" placeholder="Choose File" onChange={handlefileChange}
         
         />
         </div>
         
         <button type="submit" >add service </button>
         
         </form>   
        

         
            
        </div>
    );
};

export default AdminPanel;
