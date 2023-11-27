import React from "react";

//isso é chamado de function component forma mais atual de ser usada
function Lista(){
  return(
    <aside> 
      <h2> Estudos do dia </h2>
      <ul>
        <li>
          <h3>
            React
          </h3>
          <span>
            02:00:00
          </span>
        </li>
        <li>
          <h3>
            Javascruip
          </h3>
          <span>
            01:00:00
          </span>
          </li>
      </ul>
    </aside>
  )
}

export default Lista;
