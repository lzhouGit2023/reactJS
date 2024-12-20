
import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';  // ds
import Loading from '../components/Loading.js';

function StudentCreate(){ //please also include error handling..

const navigate = useNavigate();
    const[loading,setLoading] = useState(false)
  const [student,setStudent] = useState({
      name: '',
      email: '',
      phone: '',
      course: ''
  }  ) 
   
  const handleInput = (e)=>{
     e.persist();
     setStudent({...student,[e.target.name]: e.target.value });
  }
  
  const saveStudent = (e) =>{
    e.preventDefault(); 
    setLoading(true);
    const data ={
     name: student.name,
     email: student.email,
     phone: student.phone,
     course: student.course,
    }   //the link isn't working becasue 
    //he didn't share all the program files, but 
    //YOU CAN CREATE ANOTHER PAGE that represents students
    axios.post('http://localhost:3000/students',data)
    .then(res=>{
      alert(res.data.message);
      navigate('http://localhost:3000/students')
      setLoading(false);
    })
    .catch(function(error){
     
    }); 

  }
  

    return(
<div>
<div className="container mt-5">
          <div className="row">
          <div className="col-md-12">            
          <div className="card">            
          <div className="card-header">
            <h4>Back
                <Link to="/students" className="btn btn-danger float-end">
                    Back</Link>
                </h4> 
           </div>
          <div className="card-body">
           <form onSubmit={saveStudent}>
            <div className='mb-3'>
            <label>Name</label>
            <input type='text' name='name' value ={student.name} onChange={handleInput} className='form-control' />
            </div>
            <div className='mb-3'>
            <label>Email</label>
            <input type='text' name='email' value ={student.email} onChange={handleInput}  className='form-control' />
            </div>
            <div className='mb-3'>
            <label>Phone</label>
            <input type='text' name='phone' value ={student.phone} onChange={handleInput}  className='form-control' />
            </div>
            <div className='mb-3'>
            <label>Course</label>
            <input type='text' name='course' value ={student.course} onChange={handleInput}  className='form-control' />
            </div>
            <div className='mb-3'>
                <button type='submit' className = 'btn btn-primary'>Save Student</button>
            </div>
           </form>
            </div>
         </div>
        </div>
      </div>
    </div>
</div>

    )


}
export default StudentCreate;