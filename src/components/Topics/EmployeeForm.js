import React, { useState } from 'react';
import MyUl from '../reusable/MyUl';
import MyTable from '../reusable/MyTable';

const EmployeeForm = (props) => {

    const [employeeObj, setEmployeeObj ] = useState({name: 'Chetan', mobile: '',email:'',address: ''}); 
    
    const [employeeArray, setEmpArray] = useState([]);

    const changeEmployeeObj = (event,key) => {
        debugger;
        setEmployeeObj(prevObj => ({...prevObj, [key]: event.target.value}))
        console.log(employeeObj)
    }

    const pushEmployee = () => {
        setEmpArray(prevArray => [...prevArray, employeeObj])
    }

    
    const stateList = ['Maharashtra','Punjab','Goa'];
    const cityList = ['Pune','Mumbai','Panji','Thane'];
    const tableColumns = [
        {header:'Name', field:'name' },
        {header:'Mobile', field:'mobile' },
        {header:'Email', field:'email' },
        {header:'Address', field:'address' }
    ]
    const checkValidationByKey = (key) => {
       return employeeObj[key] == ''? true: false;
    }
    return (
        <div className='container'>
            {/* <h3>{props.pageTitle}</h3>
            <p>{props.pageSubTitle}</p>
            <MyUl list={stateList}></MyUl>
            <br/>
            <MyUl list={cityList}></MyUl> */}
            <div className='row'>
                <div className='col-4'>
                    <label>Enter Name</label>
                    <input type='text' onChange={(e)=>{changeEmployeeObj(e,'name')}} value={employeeObj.name} className='form-control' />
                  {
                    checkValidationByKey('name') &&<div className='text-danger'>
                    This is Required
                </div>
                  }  
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label>Enter Mobile</label>
                    <input type='text' onChange={(e)=>{changeEmployeeObj(e,'mobile')}} value={employeeObj.mobile}  className='form-control' />
                </div>
                <div className='col-4'>
                    <label>Enter Email</label>
                    <input type='text' onChange={(e)=>{changeEmployeeObj(e,'email')}} value={employeeObj.email} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label>Enter Address</label>
                    <textarea  value={employeeObj.address} onChange={(e)=>{changeEmployeeObj(e,'address')}}  className='form-control' ></textarea>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-6'>
                    <button className='btn btn-success' onClick={()=>{pushEmployee()}}>Save Employee</button>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-6'>
                    <MyTable columnArray={tableColumns} dataArray={employeeArray}> </MyTable>
                     {/* <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeArray.map((emp, index)=> {
                                    return (<tr>
                                        <td>{index+1}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.mobile}</td>
                                        <td>{emp.email}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody> 
                     </table>*/}
                </div>
            </div>
        
        </div>
    );
};

export default EmployeeForm;