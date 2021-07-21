export default function Input(props){
    return (
      <>
        <label htmlFor={props.name}>{props.name}</label>
        <input 
            id={props.name} 
            type={props.type} 
        />
      </>
    );
}
