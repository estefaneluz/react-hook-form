import './App.css';

function App() {
  return (
    <div className="app">
      <form>
        <label htmlFor="">Title</label>
        <input type="text"/>      

        <label htmlFor="">Body</label>
        <input type="text"/>  

        <label htmlFor="">Id do Usuário:</label>
        <input type="number"/>

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
