import React from "react";
import './style.scss';

//isso é chamado de function component forma mais atual de ser usada
function Lista(){
  const tarefas = [{ //isso é um array de objetos
    tarefa: 'React',
    tempo: '02:00:00'
  },{
    tarefa: 'Javascript',
    tempo: '01:00:00'
  },{
    tarefa: 'Typescript',
    tempo: '03:00:00'
  }]
  return(
    <aside className="listaTarefas"> 
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index)=> ( //A função no JavaScript que nos permite fazer isso é a .map, que roda, faz o loop no array e retorna algo de cada iteração.
          <li key={index} className="item">
            <h3> {item.tarefa} </h3>
            <span> {item.tempo} </span>
          </li>
        ))}        
      </ul>
    </aside>
  )
}

export default Lista;
