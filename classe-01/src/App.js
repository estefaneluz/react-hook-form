import './App.css';
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data){
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text"
          {...register('title', { required: true, minLength: 5 })}
        />      

        <label htmlFor="body">Body</label>
        <input 
          id="body" 
          type="text"
          {...register('body', { required: true, maxLength: 30 })}
        />  

        <label htmlFor="userId">User ID:</label>
        <input 
          id="userId" 
          type="number"
          {...register('userId', { required: true, valueAsNumber: true })}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
