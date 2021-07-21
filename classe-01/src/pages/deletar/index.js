import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'

const Page = () => {
    const {register, formState: errors, handleSubmit} = useForm();

    function onSubmit({id}){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        }).then(() => console.log('Postagem deletada.'));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label="Informe o ID:"
            id="id" 
            type="number"  
            {...register('id', { required: true, valueAsNumber: true })}
          />
          {errors.id?.type === 'required' && <span>É preciso informar o ID.</span>}
          <button>Deletar</button>
        </form>
    );
}

export default Page;