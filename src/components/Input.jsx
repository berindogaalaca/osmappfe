import React from 'react'

const Input = ({
    labelFor,
    labelText,
    inputType,
    placeholder,
    inputName,
    handleInputChange,
    value
  }) => {
    return (
        <div className="mb-2">
          <label htmlFor={labelFor}>{labelText}</label>
          <div className="input-group">
            <input
              type={inputType}
              placeholder={placeholder}
              className="form-control"
              onChange={handleInputChange}
              name={inputName}
              value={value}
            />
          </div>
        </div>
      );
}

export default Input