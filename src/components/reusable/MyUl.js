import React from 'react';

const MyUl = (props) => {
    return (
        <div>
            <ul>
                {
                    props.list.map((item)=>{
                        return <li> {item} </li>
                    })
                }
            </ul>
        </div>
    );
};

export default MyUl;