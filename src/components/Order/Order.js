import React, { useState } from 'react';
import Axios from 'axios'
import Orderlist from '../Orderlist/Orderlist';
import { useEffect } from 'react';
const Order = () => {
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
    const addService=()=>{
        
        
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)
        formData.append('email', info.email)
        formData.append('price', info.price)
        fetch('https://murmuring-wave-78511.herokuapp.com/service', {
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



    //
 const [comInfo,setcomInfo]=useState({})
 const[employee,setemployee]=useState(null)
  const  handleCompanyChange =(e)=>{
         const newComInfo={...comInfo}
         newComInfo[e.target.name]=e.target.value;
         setcomInfo(newComInfo)
    }
    const handleImage=(e)=>{
       const newEmployee=e.target.files[0]
       setemployee(newEmployee)
    }
    const addCompany=()=>{
        const formData = new FormData()
        formData.append('employee', employee)
        formData.append('name', comInfo.name)
        formData.append('position', comInfo.position)
        formData.append('description', comInfo.description)
        
      
        fetch('https://murmuring-wave-78511.herokuapp.com/company', {
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

  const [order,setOrder]=useState([])
    useEffect(()=>{
      fetch('https://murmuring-wave-78511.herokuapp.com/read')
      .then(res=>res.json())
      .then(data => setOrder(data))
   },[])
    return (
        <div>
       <h1>Previous Order</h1>
        <div className="row">
            {order.map(order=> <Orderlist order={order}></Orderlist>)}
        </div>

        <form onSubmit={addService}>
          <h2>Put Down Your New Order</h2>
        <div class="form-group">
         <input type="text" class="form-control" name="name" placeholder="your name" onChange={handleChange}
         
         />
        </div>
        <div class="form-group">
        <input type="text" class="form-control" name="email" placeholder="your email" onChange={handleChange}
         
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
          <input type="text" class="form-control" name="price" placeholder="your Price" onChange={handleChange}
         
         />
          <div class="form-group">
         <button type="submit" >add service </button>
         </div>
         </form>   
        `<br/>

        <hr/>

         <form onSubmit={addCompany}>
           <h2>Waiting For YOur FeedBack</h2>
         <div class="form-group">
         <input type="text" class="form-control" name="name" placeholder="your name" onChange={handleCompanyChange}
         
         />
         </div>
         <div class="form-group">
        <input type="text" class="form-control" name="position" placeholder="your name" onChange={handleCompanyChange}
         
         />
         </div>
         <div class="form-group">
         <textarea rows="5" class="form-control" name="description" placeholder="write down your opinion" onChange={handleCompanyChange}
         />
         </div>
         <div class="form-group">
         <input type="file" class="form-control" placeholder="your name" onChange={handleImage}
         
         />
         </div>
         <div class="form-group">
         <button type="submit">add Company</button>
         </div>
         </form>   
            
        </div>
    );
};

export default Order;
