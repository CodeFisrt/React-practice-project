import React, { useState } from 'react';

const Validation = () => {
    const [studentObj, setStudent] = useState({ name: '', mobile: '', city: '', state: '' });
    const [errors, setErrors] = useState([]);

    const onFormSubit = (form)=>{
        debugger;
        console.log(studentObj);
        let localErrors = [];
        for (let key in studentObj) { 
            if(studentObj[key] === '') {
                localErrors.push(key)
            }
        }
        if(localErrors.length !== 0) {
            setErrors(localErrors)
        }
        console.log(localErrors);
        form.preventDefault();
    }
    const checkKeyValidation = (key) => {
       return  errors.indexOf(key) >-1 ? true: false;
    }

    const changeFormValue = (key,event) => {
        setStudent(prevObj => ({...prevObj, [key]:event.target.value})); 
    }


    return (
        <div className='container'>
            <form onSubmit={(e)=> {onFormSubit(e)}}> 
                <div className='row'>
                    <div className='col-3'>
                        <label>Name</label>
                        <input type='text' onChange={(e)=>{changeFormValue('name',e)}} value={studentObj.name} placeholder='Name' className='form-control' />
                       
                       {checkKeyValidation('name')  &&  <div className='text-danger'>
                        This i Required     
                        </div>
                        }
                    </div>
                    <div className='col-3'>
                        <label>Contact No</label>
                        <input type='text' onChange={(e)=>{changeFormValue('mobile',e)}}  value={studentObj.mobile}  placeholder='Contact' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <label>City</label>
                        <input type='text' onChange={(e)=>{changeFormValue('city',e)}}  value={studentObj.city}  placeholder='City' className='form-control' />
                    </div>
                    <div className='col-3'>
                        <label>State</label>
                        <input type='text' onChange={(e)=>{changeFormValue('state',e)}} value={studentObj.state}  placeholder='State' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <button type='submit' className='btn btn-success'>Save</button>
                    </div> 
                </div>
            </form>
        </div>




    );
};

export default Validation;