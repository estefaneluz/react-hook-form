import {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'

const Page = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [success, setSuccess] = useState();

    useEffect(()=>{
      setSuccess('');
    }, [errors.id, errors.title, errors.body, errors.userId])

    function onSubmit(data){
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
          method: "PUT",
          body: JSON.stringify({
            id: data.id,
            title: data.title,
            body: data.body,
            userId: data.userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            setSuccess("Postagem editada.")
          });
    }

    return (
      <div className="container">
      <h1>Edite uma Postagem</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="ID da postagem:"
          id="id"
          type="number"
          {...register("id", { required: true, valueAsNumber: true })}
        />
        {errors.id?.type === "required" && (
          <span className="error">O campo ID é obrigatório.</span>
        )}
        <Input
          label="Title"
          id="title"
          type="text"
          {...register("title", { required: true, minLength: 5 })}
        />
        {errors.title?.type === "required" && (
          <span className="error">O campo Title é obrigatório.</span>
        )}
        {errors.title?.type === "minLength" && (
          <span className="error">O campo Title precisa ter ao menos 5 caracteres.</span>
        )}

        <Input
          label="Body"
          id="body"
          type="text"
          {...register("body", { required: true, maxLength: 30 })}
        />
        {errors.body?.type === "required" && (
          <span className="error">O campo Body é obrigatório.</span>
        )}
        {errors.body?.type === "maxLength" && (
          <span className="error">O campo Body não pode ultrapassar 30 caracteres.</span>
        )}

        <Input
          label="User ID:"
          id="userId"
          type="number"
          {...register("userId", { required: true, valueAsNumber: true })}
        />
        {errors.userId?.type === "required" && (
          <span className="error">O campo User ID é obrigatório.</span>
        )}

        <button>Editar</button>
      </form>
      <p className="success">{success}</p>
      </div>
    );
}

export default Page;