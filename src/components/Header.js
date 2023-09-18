import React from 'react';

const Header = () => {
    const welcomeMessage = "Welcome To React";
    const currentDate =  new Date().toDateString();
    const isStudentPresent = true;

    return (
        <div className='header'> 
             <h2> {welcomeMessage}</h2> 
             {/* <p> {currentDate}</p>
             {isStudentPresent &&  <h3> Student Is Present in class</h3>}
             {!isStudentPresent && <h3> Student is Absent</h3>} */}
                
            
        </div>
    );
};

export default Header;