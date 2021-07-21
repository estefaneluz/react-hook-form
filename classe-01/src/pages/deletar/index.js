import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'

const Page = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [success, setSuccess] = useState('');

    function onSubmit({id}){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        }).then(() => setSuccess('Postagem deletada.'));
    }

    useEffect(() =>{
      setSuccess('');
    }, [errors.id]);

    return(
      <div className="container">
        <h1>Delete uma Postagem</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label="Informe o ID:"
            id="id" 
            type="number"  
            {...register('id', { required: true, valueAsNumber: true })}
          />
          {errors.id?.type === 'required' && <span className="error" >É preciso informar o ID.</span>}
          <button>Deletar</button>
        </form>

        <p className="success">{success}</p>
      </div>
    );
}

export default Page;