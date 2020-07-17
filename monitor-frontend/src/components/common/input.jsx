import React, { Component } from 'react';

const Input = ({ divInput, name, label, placeholder, error, ...rest }) => {
    console.log(error);
    return ( 
        <div className={divInput}>
          <label htmlFor={name}></label>
          <input
            {...rest}
            autoFocus
            name={name} 
            id={name}
            className="form-control" 
            placeholder={placeholder}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          
        </div>
     );
};
 
export default Input;
