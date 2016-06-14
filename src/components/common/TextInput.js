import React, {PropTypes} from 'react';

const TextInput =({name, label, value, placeholder, onChange, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.lenght > 0){
        wrapperClass += ' '+ 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input 
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} 
                    className="form-control"/>
                    {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes ={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;