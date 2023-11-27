import React from "react";
import Botao from "../Botao";

//isso é chamado de class component forma mais antiga de ser usada
class Formulario extends React.Component {  
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa"> {/* html for serve pra que o input com o mesmo nome seja o foco quando clicado */}
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
