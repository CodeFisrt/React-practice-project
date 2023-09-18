import React from 'react';

const Events = () => {
    const showAlert = () => {
        alert("Welcome To React Tutorials")
    }
    const onCountryChange = () => {
        alert("Country Changed")
    }
    const getSelectedCountry = (param) => {
        alert("Selected Country is "+ param)
    }
    const onMouseEnter = () => {
        console.log("Mouse Entered")
    }
    const onMouseLevae = () => {
        console.log("Mouse Lefet Div")
    }
    const textValueChange = (param) => {
        console.log('Text Value ='+ param)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <button className='btn btn-sm btn-primary' onClick={showAlert} >Show Alert</button>
                </div>
                <div className='col-3'>
                    <button className='btn btn-sm btn-primary' onClick={()=>showAlert()} >Alert</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <select className='forn-control'  onChange={onCountryChange}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Shrilanka">Shrilanka</option>
                    </select>   
                </div>
                <div className='col-3'>
                <select className='forn-control'  onChange={(e)=>getSelectedCountry(e.target.value)}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Shrilanka">Shrilanka</option>
                    </select> 
                </div>
            </div>
            <div className='row'>
                <div className='col-3 p-4 bg-success' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLevae}>
                        My Div Area
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' onChange={(e) => textValueChange(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Events;