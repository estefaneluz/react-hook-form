import './App.css';
import { useForm } from 'react-hook-form'

function App() {
  const { register } = useForm();
  return (
    <div className="app">
      <form>
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text"
          {...register('title')}
        />      

        <label htmlFor="body">Body</label>
        <input 
          id="body" 
          type="text"
          {...register('body')}
        />  

        <label htmlFor="userId">User ID:</label>
        <input 
          id="userId" 
          type="number"
          {...register('userId')}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
