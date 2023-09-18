import React, { useState } from 'react';

const UseState = () => {
    const [languageName, setLanguageName] =  useState('ReactJs');
    const [productPrice, setPrice] = useState(1200);
    const [studentObj,setStudentObj] = useState({name:"Chetan", city:'Mumbai',contact:'9988776655'});
    const [cityList, setList] = useState(['Pune','Mumbai']);

    const changeLanguage = () => {
        setLanguageName('Angular')
    }
    const changePrice = () => {
        setPrice(2200);
    }
    const changeStudName = () => {
        setStudentObj(prevObj => ({...prevObj,name: "Rahul"}))
    }
    const changeCity = () => {
        setStudentObj(prevObj => ({...prevObj,city:'Pune'}))
    }
    const addNewCity = () => {
        setList(prevArray => [...prevArray,'Thane'])
    }
    const changeNameWithParam = (param) => {
        debugger;
        setLanguageName(param)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <p> {languageName}</p>
                </div>
                <div className='col-3'>
                    <input className='form-control' onChange={(event)=> changeNameWithParam(event.target.value)}  placeholder='ENter Name'/>
                    <button className='btn btn-sm btn-primary' onClick={() => changeLanguage()}>Change Language</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <p> {productPrice}</p>
                </div>
                <div className='col-3'>
                    <button className='btn btn-sm btn-primary' onClick={() => changePrice()}>Change Price</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <p> {studentObj.name} ,  {studentObj.city}, {studentObj.contact}</p>
                </div>
                <div className='col-6'>
                    <button className='btn btn-sm btn-primary' onClick={() => changeStudName()}>Change Name</button>
                    <button className='btn btn-sm btn-primary' onClick={() => changeCity()}>Change City</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <p>{cityList}</p>
                </div>
                <div className='col-3'>
                    <button className='btn btn-sm btn-primary' onClick={() => addNewCity()}>Add City</button>
                </div>
            </div>
        </div>
    );
};

export default UseState;