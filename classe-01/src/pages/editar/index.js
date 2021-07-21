import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'

const Page = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    function onSubmit(data){
        console.log(data);
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="ID da postagem:"
          id="id"
          type="number"
          {...register("id", { required: true, valueAsNumber: true })}
        />
        <Input
          label="Title"
          id="title"
          type="text"
          {...register("title", { required: true, minLength: 5 })}
        />
        {errors.title?.type === "required" && (
          <span>O campo Title é obrigatório.</span>
        )}
        {errors.title?.type === "minLength" && (
          <span>O campo Title precisa ter ao menos 5 caracteres.</span>
        )}

        <Input
          label="Body"
          id="body"
          type="text"
          {...register("body", { required: true, maxLength: 30 })}
        />
        {errors.body?.type === "required" && (
          <span>O campo Body é obrigatório.</span>
        )}
        {errors.body?.type === "maxLength" && (
          <span>O campo Body não pode ultrapassar 30 caracteres.</span>
        )}

        <Input
          label="User ID:"
          id="userId"
          type="number"
          {...register("userId", { required: true, valueAsNumber: true })}
        />
        {errors.userId?.type === "required" && (
          <span>O campo User ID é obrigatório.</span>
        )}

        <button>Editar</button>
      </form>
    );
}

export default Page;