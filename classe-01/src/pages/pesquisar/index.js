import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input'

const Page = () => {
    const {register, formState: {errors}, handleSubmit } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label="Informe o ID:"
            id="id" 
            type="number"  
            {...register('id', { required: true, valueAsNumber: true })}
          />
          {errors.id?.type === 'required' && <span>É preciso informar o ID.</span>}
          <button>Pesquisar</button>
        </form>
    );
}

export default Page;