import React from 'react';

const MyTable = (props) => {
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        {
                            props.columnArray.map((item) => {
                                return <th>{item.header}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.dataArray.map((item) => {
                            return <tr>
                                {
                                    props.columnArray.map((header) => {
                                        return <td> {item[header.field]} </td>
                                    })
                                }

                            </tr>
                        })
                    }
                    <tr>

                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyTable;