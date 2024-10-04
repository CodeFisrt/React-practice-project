import React from 'react';
import Events from './Topics/Events';
import UseState from './Topics/UseState';
import EmployeeForm from './Topics/EmployeeForm';
import Validation from './Topics/Validation';

const Body = () => {
    return (
        <div>
            <article>
                 {/* <Events/> */}
                 {/* <UseState/> */}
                 {/* <EmployeeForm  pageTitle="Welcome To Props Session" pageSubTitle="Detail Examples"/> */}
                 <Validation/>
            </article>
        </div>
    );
};

export default Body;