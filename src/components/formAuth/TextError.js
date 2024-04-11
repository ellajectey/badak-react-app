import React from 'react';

function TextError(props) {
    return (
        <div className='error text-red-500 text-sm '>
            {props.children}
            
        </div>
    );
}

export default TextError;