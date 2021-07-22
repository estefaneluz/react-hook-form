import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input'
import Post from '../../components/Post'

const Page = () => {
    const {register, formState: {errors}, handleSubmit } = useForm();

    function onSubmit({id}){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((json) => console.log(json));
    }

    return (
      <div className="container">
        <h1>Pesquise por uma Postagem</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label="Informe o ID:"
            id="id" 
            type="number"  
            {...register('id', { required: true, valueAsNumber: true })}
          />
          {errors.id?.type === 'required' && <span className="error">É preciso informar o ID.</span>}
          <button>Pesquisar</button>
        </form>
        <Post title={"O guia do mochileiro das galaxias"} body={"Um livro muito bom"} userId={1234}/>
      </div>
    );
}

export default Page;