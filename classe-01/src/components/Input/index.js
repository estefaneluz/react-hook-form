import React from "react"

const Input = React.forwardRef((props, ref) => (
  <>
    <label htmlFor={props.id}>{props.label}</label>
    <input 
        name={props.name} 
        type={props.type} 
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
    />
  </>
));

export default Input;